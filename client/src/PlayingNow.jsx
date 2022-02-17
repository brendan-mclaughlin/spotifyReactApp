import {useState, useEffect} from 'react'
import SpotifyPlayer from "react-spotify-web-playback"
let testImage ='https://i.scdn.co/image/ab67616d0000b273251208dd8a171216f45d47e8'
export default function PlayingNow({accessToken, trackURL}) {
    console.log(trackURL)
    if(!accessToken)return null
  return ( <div layout = "d-flex m-2 align-items-center">
            <img src={trackURL}style={{height: '480px', width: '480px'}}/>
        </div>
  )}
