const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    console.log('hi')
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/musicplay',
        clientId: '154477c5fd8a4aaf8d8188ef60ef98ee',
        clientSecret: '5dc48e4be80c434496f6fefef7e870a0',
        refreshToken
    })
    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn
            })
        }).catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})

app.post('/musicplay', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/musicplay',
        clientId: '154477c5fd8a4aaf8d8188ef60ef98ee',
        clientSecret: '5dc48e4be80c434496f6fefef7e870a0'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
        })
    })
    .catch((err)=> {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001)