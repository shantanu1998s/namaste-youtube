import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  dispatch(closeMenu());
  useEffect(() => {}, []);
  return (
    <div className="ml-5 mt-3 ">
      <iframe
      className="rounded-xl"
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
