import React from "react"
import Image from "next/image"


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=154477c5fd8a4aaf8d8188ef60ef98ee&response_type=code&redirect_uri=http://localhost:3000/musicplay&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login () {
    return(
        <div className="justify-center px-16 pt-32 md:px-64 lg:px-64  ">
            <Image src="/play.svg" width={300} height={300} alt="logo"
            className="px-6 py-4 pt-32 " />
            <a href={AUTH_URL}>
            <button  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            </a>
        </div>
    )
}