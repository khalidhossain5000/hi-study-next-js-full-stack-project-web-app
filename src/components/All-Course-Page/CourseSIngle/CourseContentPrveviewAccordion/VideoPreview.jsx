/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";
const VideoPreview = ({ singleData }) => {
  if(!singleData) return <h2 className="text-black">SIngle data is loading ehre</h2>
    console.log(singleData);
    const previewUrl=singleData?.chapters[0].lessons[0].videoUrl
    console.log(previewUrl,'prev url');
  return (
    <div className="relative lg:w-96 rounded-lg overflow-hidden">
      {/* Course Image */}
      <img
        src={singleData?.courseImage}
        alt="course thumbnail"
       
       
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Top-center preview text */}
      <h2 className="absolute top-5 left-1/2 w-full -translate-x-1/2 text-white text-center text-xl font-bold z-10">
        See A Preview Video Of the Course
      </h2>

      {/* Centered Play Button with Ping and Dialog */}
      <Dialog className="w-96">
        <DialogTrigger asChild>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            {/* Ripple ping effect */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                             w-20 h-20 border-2 border-indigo-500 rounded-full 
                             animate-ping"
            ></span>

            {/* Play button */}
            <button
              className="relative bg-white border-2 border-indigo-600 p-4 rounded-full 
                               shadow-lg hover:scale-110 transition-transform z-10 cursor-pointer"
            >
              <Play className="w-6 h-6 text-indigo-600" />
            </button>
          </div>
        </DialogTrigger>

        <DialogContent className="w-[90vw] max-w-6xl  mx-auto rounded-lg p-2 ">
          <DialogHeader className="p-2  text-white">
            <DialogTitle className="text-xl font-bold"></DialogTitle>
          </DialogHeader>
         
          {/* Video placeholder */}
          <div className="w-full h-[400px] bg-black flex items-center justify-center">
            {/* Replace src with your YouTube embed later */}
            <iframe
              width="100%"
              height="100%"
              src={"https://www.youtube.com/embed/ER9SspLe4Hg"}
              title="Course Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoPreview;
