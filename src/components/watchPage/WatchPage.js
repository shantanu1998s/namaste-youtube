import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../comment/CommentContainer";
import LiveChat from "../liveChat/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  dispatch(closeMenu());
  useEffect(() => {}, []);
  return (
    <div className="w-full">
      <div className="flex ">
        <div className="ml-5 mt-3  ">
          <iframe
            className="rounded-xl"
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullScreen
          ></iframe>
        </div>
        <div className="mt-4 mx-2 p-2 w-full h-[400px] overflow-y-scroll overflow-x-scroll border border-black rounded-lg bg-slate-100 ">
          <LiveChat />
        </div>
      </div>
      <div className="ml-5 mt-5 w-[800px]">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
