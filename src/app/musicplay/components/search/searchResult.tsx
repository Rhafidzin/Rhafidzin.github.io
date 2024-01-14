import React from "react"
import Image from "next/image"
import Link from "next/link"
import moment from "moment"

export default function TrackSearchResult({ track }) {
  // function handlePlay() {
  //   chooseTrack(track)
  // }

  const duration = moment(track.duration).format("mm:ss")
  
  return (
              <tr key={track.uri}>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <Image src={track.albumUrl} width={100} height={100} alt="Album Cover"
                      className="" />
                    </div>
                    <p className="font-medium">{track.title}</p>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <p className="text-center">{track.artist}</p>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <p className="text-right">{duration}</p>
                </td>
              </tr>

  )
}