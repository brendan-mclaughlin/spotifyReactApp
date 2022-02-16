import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import TrackSearchResult from "./TrackSearchResult";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "2b7833ae90d54a59be5a2b0e1b77a0c4",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getUserPlaylists('bman279').then((playlists) => {
          console.log(playlists.body);
    });
    spotifyApi.getMySavedTracks(50, 0).then((playlists) => {
      console.log(playlists.body);
});
  }, [accessToken]);

//   let getBack = () => {
//     spotifyApi.getMyCurrentPlayingTrack().then((track) => {
//       console.log(track.body.item.album.images[0].url);
//       return track.body.item.album.images[0].url;
//     });
//   };

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumnImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url, //Highest quality image maybe
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    //console.log(getBack()),
    (
      <Container
        className="d-flex flex-column py-2"
        style={{ height: "100vh"}}
      >
        <Form.Control
          type="search"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
          {searchResults.map((track) => (
            <TrackSearchResult track={track} key={track.uri} />
          ))}
        </div>
        <div>Bottom</div>
      </Container>
    )
  );
}
