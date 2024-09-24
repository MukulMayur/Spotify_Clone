import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Slidebar() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-[25%] gap-2 p-2  flex-col text-white lg:flex hidden ">
      <div className=" bg-[#121212] h-[15%] rounded flex justify-around flex-col">
        <div
          onClick={() => navigate("/Spotify_Clone/")}
          className=" flex gap-3 items-center pl-8 cursor-pointer"
        >
          <img
            src={assets.home_icon}
            alt="Home Icon"
            className="w-6 hover:bg-neutral-800"
          />
          <p className="font-bold">Home</p>
        </div>
        <div className=" flex gap-3 items-center pl-8 cursor-pointer">
          <img src={assets.search_icon} alt="Home Icon" className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className=" h-[85%] bg-[#121212] rounded">
        <div className=" flex p-4 items-center justify-between">
          <div className="flex gap-3 items-center cursor-pointer">
            <img src={assets.stack_icon} alt="Stack Icon" className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex gap-1 items-center">
            <img
              src={assets.arrow_icon}
              alt="Arrow Icon"
              className="w-9 p-2 hover:bg-neutral-800 rounded-full cursor-pointer"
            />
            <img
              src={assets.plus_icon}
              alt="Plus Icon"
              className="w-9 p-2 hover:bg-neutral-800 rounded-full cursor-pointer"
            />
          </div>
        </div>
        <div className=" p-4 m-2 rounded bg-[#242424] font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your First Playlist</h1>
          <p className="font-light">It's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create PlayList
          </button>
        </div>
        <div className=" p-4 m-2 rounded bg-[#242424] font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's Find some podcast to follow</h1>
          <p className="font-light">we'll keep you update on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
}
export default Slidebar;
