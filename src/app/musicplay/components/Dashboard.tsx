import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './search/searchResult'
import moment from 'moment'
import Image from 'next/image'
import Player from './player'

const spotifyApi = new SpotifyWebApi({
  clientId: "154477c5fd8a4aaf8d8188ef60ef98ee"
})

export default function Dashboard({code}:{code:string}) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()

  function chooseTrack(track){
    setPlayingTrack(track)
    setSearch("")
  }

  console.log(searchResults)

  useEffect(() => {
    if (!accessToken) return 
    spotifyApi.setAccessToken(accessToken)
  
  }, [accessToken])
  
  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return 

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce(
          (smallest, image) => {
          if (image.height < smallest.height) return image
          return smallest
        }, track.album.images[0] )

        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url,
          duration: track.duration_ms

        }
      }))
    })
    return() => cancel = true
  }, [search, accessToken])

  const Results = searchResults.map(track =>
    <TrackSearchResult key={track.uri} track={track}/>
    )

    return (
    <div className=''>
      <div className='px-2'>
      <form className="pt-2 py-2 max-w-2xl w-full mx-auto justify-center" action="#" method="POST">
      <input
          type="search"
          className="block w-full rounded-md border-0 px-3 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search song/artist"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {/* <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button> */}
      </form>
      </div>
      {!search ? null : 
      <section className="antialiased text-gray-600 px-2">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="flex flex-col justify-center h-full">
        <div className="p-2">
          <div className="overflow-x-auto ">
            <table className="table-auto w-full">
              <thead className="text-xs text-gray-500 bg-gray-50 ">
                <tr>
                  <th className="p-2 text-left">TITLE</th>
                  <th className="p-2 text-center">ARTIST</th>
                  <th className="p-2 text-right">DURATION</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
              {Results}
              </tbody>
            </table>
            <div><Player accessToken={accessToken} trackUri={playingTrack?.uri} /></div>
          </div>
        </div>
      </div>
      </div>
    </section>}
      
    </div>
  )
}
