import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";
import TrackLikedSongs from "./TrackLikedSongs";
import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi({
  clientId: "2b7833ae90d54a59be5a2b0e1b77a0c4",
});
export default function LikedSongs({accessToken}) {
  //const accessToken = useAuth(code);
  const [myLikedSongs, setLikedSongs] = useState([]);
  useEffect(() => {
    if (!accessToken) {
      console.log("bad token");
      return;
    }
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getMySavedTracks({
      limit: 50,
        offset: 0,
})
.then(
function (data) {
var jsonData = [{
      title: " ", 
      artist: " ",
      albumnUrl: " "}];
let arr = data.body.items;
console.log(data.body.items)
for(let i=0; i < arr.length; i++) {
  var temp ={}
  temp['title'] = arr[i].track.name
  temp['artist'] = arr[i].track.artists[0].name
  temp['albumUrl'] = arr[i].track.album.images[0].url

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
},[accessToken]); 
  return (
    <div>
      <Container
          className = "d-flex flex-column py-0"
          style={{width: "100vh", height: "100vh" }}
          >
            <div className="flex-grow-1 my-2 mx-6" style={{ overflowY: "auto" }}>
             {myLikedSongs.map((track) => (
              <TrackLikedSongs
                track={track}
                key={track.artist}
                              />
            ))} 
          </div>
          </Container>

    </div>
  );
}
