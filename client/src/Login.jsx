import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=2b7833ae90d54a59be5a2b0e1b77a0c4&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing"

export default function Login() {
    return ( 
        //centers button
    <Container className = "d-flex justify-content-center align-items-center"
        style ={{minHeight:"100vh"}}>
        <a className= "btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify

        </a>     
    </Container>
    )
}