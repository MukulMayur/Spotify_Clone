import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayContext } from "../Context/PlayContext";

function Player() {
  const {
    seekBar,
    seekBg,
    play,
    pause,
    playStatus,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayContext);

  return (
    <div className=" h-[10%] items-center flex justify-between text-white px-4 bg-black">
      <div className=" lg:flex gap-4 items-center hidden">
        <img src={track.image} className="w-12" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-1 m-auto">
        <div className=" flex gap-4">
          <img src={assets.shuffle_icon} className="cursor-pointer w-4" />
          <img
            onClick={previous}
            src={assets.prev_icon}
            className="cursor-pointer w-4"
          />
          {playStatus ? (
            <img
              onClick={pause}
              src={assets.pause_icon}
              className="cursor-pointer w-4"
            />
          ) : (
            <img
              onClick={play}
              src={assets.play_icon}
              className="cursor-pointer w-4"
            />
          )}

          <img
            onClick={next}
            src={assets.next_icon}
            className="cursor-pointer w-4"
          />
          <img src={assets.loop_icon} className="cursor-pointer w-4" />
        </div>
        <div className="flex gap-5 items-center">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] rounded-full bg-gray-300 cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none bg-green-800 rounded-full w-0"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} className="w-4 cursor-pointer" />
        <img src={assets.mic_icon} className="w-4 cursor-pointer" />
        <img src={assets.queue_icon} className="w-4 cursor-pointer" />
        <img src={assets.speaker_icon} className="w-4 cursor-pointer" />
        <img src={assets.volume_icon} className="w-4 cursor-pointer" />
        <div className="w-20 bg-slate-50 h-1 rounded cursor-pointer"></div>
        <img src={assets.mini_player_icon} className="w-4 cursor-pointer" />
        <img src={assets.zoom_icon} className="w-4 cursor-pointer" />
      </div>
    </div>
  );
}
export default Player;
