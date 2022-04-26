import React from 'react'

export default function TrackSearchResult({track}) {
    // function handlePlay(){
    //     chooseTrack(track)
    // }
  return (
  <div 
             className = "d-flex m-1 align-items-center"
            // style={{cursor: "pointer"}}
            // onClick={handlePlay}
            >
            <img src={track.albumUrl} style={{height: '120px', width: '120px'}}/>
     <div className ="text-center mx-3">
       <div>{track.title}</div>
       <div className="text-muted">{track.artist}</div>
       </div>

   </div>
  )}
