import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { useRef } from "react";
const ProjectsCard = ({ title, des, src, gitLink, deploymentLink }) => {
  // Function to set the start time and play the video
  const videoRef = useRef(null);
  const [playbackRate, setPlayBackRate] = useState(1);
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(false);

  const playVideoFromStartTime = () => {
    const startTimeInSeconds = 20; // Set your desired start time in seconds
    videoRef.current.currentTime = startTimeInSeconds;
    videoRef.current.play();
    videoRef.current.playbackRate = playbackRate;
  };
  const handleMouseOver = () => {
    // Change the playback rate to 2x on hover
    setPlayBackRate(2);
    videoRef.current.playbackRate = 2;
  };

  const handleMouseLeave = () => {
    // Reset the playback rate on mouse leave
    setPlayBackRate(1);
    videoRef.current.playbackRate = 1;
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        {/* <video
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        /> */}
        <video
          ref={videoRef}
          className="
          w-full
          h-60
          object-contain
          transform
          duration-300
          cursor-pointer 
          hover:scale-110"
          autoPlay
          controls
          loop
          onLoadedData={playVideoFromStartTime}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <source src={src} type="video/mp4" />
        </video>
        {showPlaybackSpeed && (
          <div className="absolute top-0 left-0 p-2 bg-black text-white opacity-75">
            {playbackRate}x
          </div>
        )}
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a target="_blank" rel="noopener noreferrer" href={gitLink}>
                  <BsGithub />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={deploymentLink}
                >
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
