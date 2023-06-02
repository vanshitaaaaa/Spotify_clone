import React,{useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';

export default function CurrentTrack() {
    const [{token, currentlyPlaying},dispatch]=useStateProvider();
    useEffect(() => {
        const getCurrentTrack=async()=>{
            const response=await axios.get("https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers:{
                    "Authorization":"Bearer "+token,
                    "Content-Type": "application/json",
                },
            });
            if(response.data !== ""){
              const { item } = response.data;
              const currentlyPlaying = {
                id: item.id,
                name: item.name,
                artists: item.artists.map((artist) => artist.name),
                image: item.album.images[2].url,
              };
        dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying});
            }
        };
        getCurrentTrack();
    },[token, dispatch]);
  return (
    <Container>
      {currentlyPlaying && (
        <div className="track">
          <div className="track_image">
            <img src={currentlyPlaying.image} alt="Now Playing..." />
          </div>
          <div className="track_info">
            <h4>{currentlyPlaying.name}</h4>
            <h6>{currentlyPlaying.artists.join(", ")}</h6>
          </div>
        </div>
      )
      }
    </Container>
  )
}

const Container= styled.div`
.track{
  display: flex;
  .track_image{
    padding-top: 7px;
    padding-right: 15px;
    padding-left: 7px;
  }
  h4{
    color:white;
    margin-bottom: 4px;
  }
  h6{
    color:white;
    margin-top: 2px;
    margin-left: 4px;
   }
}
`;
