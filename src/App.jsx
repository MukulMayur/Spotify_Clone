import { useContext } from "react";
import Display from "./Components/Display";
import Player from "./Components/Player";
import Slidebar from "./Components/Slidebar";
import { PlayContext } from "./Context/PlayContext";

function App() {
  const { audioRef, track } = useContext(PlayContext);
  return (
    <div className="h-screen bg-black">
      <div className="flex h-[90%]">
        <Slidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
