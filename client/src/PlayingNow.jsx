import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";
import styled from 'styled-components';

const spotifyApi = new SpotifyWebApi({
  clientId: "2b7833ae90d54a59be5a2b0e1b77a0c4",
});
let testImage =
  "https://i.scdn.co/image/ab67616d0000b273251208dd8a171216f45d47e8";

export default function PlayingNow({ accessToken }) {
  const [userTrackURL, setUserTrackURL] = useState();
  const [userTrack, setUserTrack] = useState();
  const [userArtist, setUserArtist] = useState();



  useEffect(() => {
    if (!accessToken){
      console.log("bad token")
      return;
    }
    const interval = setInterval(() => {
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.getMyCurrentPlayingTrack("bman279").then((track) => {
        if (!track){ 
          console.log("track.body.item.album.images[0].url");
          return;
        }
        console.log(track.body);
        setUserTrackURL(track.body.item.album.images[0].url);
        setUserTrack(track.body.item.name);
        setUserArtist(track.body.item.artists[0].name);


      });
    }, 5000);
    return () => clearInterval(interval);
  }, [accessToken]);

  return (
    <div>
    <Image src={`${userTrackURL}`}style={{ height: "500px", width: "500px" }} />
    <h1>Current Song: {userTrack} by {userArtist}</h1>
     </div>

  );
}
// </Wrapper>
//   <div layout="d-flex m-2 align-items-right">
//     <img src={userTrack} style={{ height: "500px", width: "500px" }} />
//   </div>
const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

