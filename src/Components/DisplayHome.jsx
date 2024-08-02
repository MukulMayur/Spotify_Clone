import AlbumItems from "./AlbumItems.jsx";
import Navbar from "./Navbar.jsx";
import { albumsData, songsData } from "../assets/assets";
import SongItems from "./SongItems.jsx";

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Chats</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItems
              key={index}
              image={item.image}
              desc={item.desc}
              name={item.name}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItems
              key={index}
              image={item.image}
              desc={item.desc}
              name={item.name}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default DisplayHome;
