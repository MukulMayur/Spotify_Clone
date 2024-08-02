import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayContext } from "../Context/PlayContext";

function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData[id];

  const { playWithId } = useContext(PlayContext);

  return (
    <>
      <Navbar />
      <div className="mt-10 gap-8 flex flex-col md:flex-row md:items-end">
        <img src={albumData.image} className="rounded w-48" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img src={assets.spotify_logo} className="w-5 inline-block" />
            <b> Spotify</b> • 12,322,233 likes •<b> 50 songs,</b>about 2 hr 30
            min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-10 mb-4 sm:grid-cols-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-col-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="hidden sm:block text-[15px]">5 Days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
}
export default DisplayAlbum;
