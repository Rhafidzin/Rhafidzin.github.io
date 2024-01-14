import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code: unknown) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
      axios.post('http://localhost:3001/musicplay', {
        code,
      }).then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        console.log(res.data)
        window.history.pushState({}, "", "/musicplay")
      }).catch(() => {
        window.location = '/musicplay'
      })
      }, [code])

      useEffect(() => {

      }), [code]

      useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(()=> {

        axios.post('http://localhost:3001/refresh', {
          refreshToken,
        }).then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        }).catch(() => {
          window.location = '/musicplay'
        })
      }, (expiresIn - 60) * 1000)
      return() => clearInterval(interval)
        }, [refreshToken, expiresIn])
  
        


      return accessToken
    }

