import { useContext } from "react";
import { PlayContext } from "../Context/PlayContext";

function SongItems({ image, desc, id, name }) {
  const { playWithId } = useContext(PlayContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
}
export default SongItems;
