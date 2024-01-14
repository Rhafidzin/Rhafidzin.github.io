'use client'
import Login from "./pages/page"
import Dashboard from "./components/Dashboard"
import { useEffect, useState } from "react"


// const params = new URLSearchParams(window.location.search)
// const code = params.get('code')
export default function Home() {
    
    const [code, setCode] = useState ("")
    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code')
        setCode(code)
        
        console.log(code)
    },[code]) 

    return !code ? <Login /> :   <Dashboard code={code} />
        

}