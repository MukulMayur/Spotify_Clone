import React from "react";
import { useNavigate } from "react-router-dom";
function AlbumItems({ image, name, desc, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/Spotify_Clone/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded  cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
}
export default AlbumItems;
