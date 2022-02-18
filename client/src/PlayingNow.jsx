import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";
const spotifyApi = new SpotifyWebApi({
  clientId: "2b7833ae90d54a59be5a2b0e1b77a0c4",
});
let testImage =
  "https://i.scdn.co/image/ab67616d0000b273251208dd8a171216f45d47e8";

export default function PlayingNow({ accessToken }) {
  const [userTrack, setUserTrack] = useState();
  console.log("bad");
  //const accessToken = useAuth(code);
  console.log("goode");

  useEffect(() => {
    if (!accessToken) return;
    const interval = setInterval(() => {
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.getMyCurrentPlayingTrack("bman279").then((track) => {
        if (!track) return;
        console.log("track.body.item.album.images[0].url");
        setUserTrack(track.body.item.album.images[0].url);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [accessToken]);

  console.log(testImage);
  //if(!accessToken)return null
  return (
    <div layout="d-flex m-2 align-items-left">
      <img src={userTrack} style={{ height: "1080px", width: "1080px" }} />
    </div>
  );
}
