import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_INFO_API } from "../utils/constants";
import VideoDetails from "./VideoDetails";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    getVideoDetails();
    dispatch(closeMenu());
  }, [dispatch]);

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_INFO_API + searchParams.get("v"));
    const json = await data.json();
    setDetails(json.items[0].snippet);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="p-5 pl-28 flex w-full">
        <div>
          <iframe
            className="rounded-lg shadow-lg"
            width="1200"
            height="600"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            allow="autoplay"
            title="YouTube video player"
            allowFullScreen
          />
          <div>
            <VideoDetails data={details} />
          </div>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
