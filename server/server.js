require('dotenv').config();
const express = require('express');
const cors = require('cors');
const spotifyWebApi = require('spotify-web-api-node');
const bodyParser = require('body-parser');
const app = express();
console.log(process.env.REACT_APP_SECRET)
app.use(cors());
app.use(bodyParser.json());


app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    console.log("hi")
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '2b7833ae90d54a59be5a2b0e1b77a0c4',
        clientSecret: process.env.REACT_APP_SECRET,
        refreshToken,
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                    accessToken: data.body.access_token,
                    expiresIn: data.body.expires_in,
                })
                //console.log(data.body)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '2b7833ae90d54a59be5a2b0e1b77a0c4',
        clientSecret: process.env.REACT_APP_SECRET
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(err => {
            res.sendStatus(400)
        })
})
app.listen(3001)