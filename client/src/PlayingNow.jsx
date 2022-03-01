import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./useAuth";
const spotifyApi = new SpotifyWebApi({
  clientId: "2b7833ae90d54a59be5a2b0e1b77a0c4",
});
let testImage =
  "https://i.scdn.co/image/ab67616d0000b273251208dd8a171216f45d47e8";
  function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
  var styled = _interopDefault(require('styled-components'));
  var keyframes = require('styled-components').keyframes;

export default function PlayingNow({ accessToken }) {
  const [userTrackURL, setUserTrackURL] = useState();
  const [userTrack, setUserTrack] = useState();
  const [userArtist, setUserArtist] = useState();
  const [likedSongs, setLikedSongs] = useState();

  useEffect(() => {
    if (!accessToken) {
      console.log("bad token");
      return;
    }
    const interval = setInterval(() => {
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.getMyCurrentPlayingTrack("bman279").then((track) => {
        if (!track) {
          console.log("track.body.item.album.images[0].url");
          return;
        }
        console.log(track.body.item.name);
        setUserTrackURL(track.body.item.album.images[0].url);
        setUserTrack(track.body.item.name);
        setUserArtist(track.body.item.artists[0].name);
      });
    }, 5000);
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getMySavedTracks({
              limit: 10,
                offset: 1,
    })
    .then(
      function (data) {
        var jsonData = [{
              title: " ", 
              artist: " "}];
        let arr = data.body.items;
        console.log(data.body.items)
        for(let i=0; i < arr.length; i++) {
          var temp ={}
          temp['title'] = arr[i].track.name
          temp['artist'] = arr[i].track.artists[0].name
          jsonData[i] = temp;
          console.log(arr[i].track.name)
        }
        setLikedSongs(jsonData)
       console.log(jsonData)
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    
  
);
    return () => clearInterval(interval);
  }, [accessToken]);

  return (
    <div>
      <Image
        src={`${userTrackURL}`}
        style={{ height: "500px", width: "500px" }}
      />
      <Text>
        Current Song: {userTrack}{"\n"}
        by {userArtist}
      </Text>
      
    </div>
  );
}
const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
  margin-right: 10px;
  animation: ${rotate} 15s linear infinite;
`;
const Text = styled.h1`
font-size: 2.0em;;
`;

