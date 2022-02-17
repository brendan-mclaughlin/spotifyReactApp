import useAuth from './useAuth.js';
//const code = new URLSearchParams(window.location.search).get("code")
//import 'bootstrap/dist/css/bootstrap.min.css';
import spotifyWebApi from "spotify-web-api-node";

const spotifyApi = new spotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '2b7833ae90d54a59be5a2b0e1b77a0c4',
    clientSecret: '4954dfc2e2c14c9a8f4ea7327fa223b3',
})

//const accessToken = useAuth("AQAbZSYV7roQBAhzwG3HjXCzjF7A5DIqZCgEp-A9SghHh4qenRnXT3EytTQbXn165Yri9LIICT9iT0hOLY2eKf-OZecfjofzBN9B0lu08nyxhX2KBW756I-6zLgEQY0zHqn_usHxSoJYYqtjX94PY9fMc2nSphJqk1FmTogF6wSXspf0L8HpYcZ9dTyVMv1TscdZ21XkmQ2q8L2VsWany3KxcjQ4jRfEVidXNdXYmd9gpQctjwtvDA4AgnG3ovIbhXanG8SV75A_XDEPmLZDum61fuBjYYKwjdAY4UFEsNva1SkgtJo1UG5sHjOVJ3vZTd59O0bMzskL2gFin9e5YPJ5bEbDrZFew1FAIUKy5EW6-rReyRkmKB6qONDk3NrguxCd");

spotifyApi.setAccessToken(accessToken);
spotifyApi.getUserPlaylists('bman279').then((playlists) => {
    console.log(playlists.body);
});