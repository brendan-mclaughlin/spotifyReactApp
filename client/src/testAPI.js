import useAuth from "./useAuth";

import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "2b7833ae90d54a59be5a2b0e1b77a0c4",
});
const accessToken = useAuth(code);

spotifyApi.setAccessToken(accessToken);
spotifyApi.getUserPlaylists('bman279').then((playlists) => {
        console.log(playlists.body);
});

