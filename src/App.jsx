import { useContext } from "react";
import Display from "./Components/Display";
import Player from "./Components/Player";
import Slidebar from "./Components/Slidebar";
import { PlayContext } from "./Context/PlayContext";
import { useNavigate } from "react-router-dom";

function App() {
  const { audioRef, track } = useContext(PlayContext);
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-black">
      <div className="flex h-[90%]">
        <Slidebar navigate="/Spotify_Clone/" />
        <Display navigate="/Spotify_Clone/" />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
