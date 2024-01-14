'use client'
import { useEffect, useState } from "react"
import axios from "axios"

export default function Player() {
    const CLIENT_ID = "154477c5fd8a4aaf8d8188ef60ef98ee"
    const REDIRECT_URI = "http://localhost:3000/musicplay"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtist] = useState("")

    useEffect(()=> {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if(!token && hash){
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            
            
            window.location.hash = ""
            window.localStorage.setItem("token", token)
            
        }
        setToken(token)
    })
    const showMusic = async (e) => {
        e.preventDefault()
        const {data} = await axios.get('https://api.spotify.com/v1/search',{
            headers: {
                Authorization: `Bearer ${token}`
            },
            params:{
                q: searchKey,
                type: "artist",
            }
        });
        
        setArtist(data.artist.items)
    }

    // const musics = await response.json()
    // console.log(musics)
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    // const renderArtists = () =>{
    //     return (
            
    //     )
    // }
    return(
        <div className="content-center ">
            <div className="mx-auto px-6 lg:px-8 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-start">
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</a>
                : <button onClick={logout} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button> }
            </div>

            
        </div>
        
        {token?
                <form onSubmit={showMusic}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>
                : <h2>Please Login</h2>
            }
            
        </div>
    )
}