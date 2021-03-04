import React from "react";
import Image from "next/image";
import Link from "next/link";

function FotoGalerij() {
  return (
    <div>
      <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <img src="" alt="profilepic" />
            </div>
            <span className="pt-1 ml-2 font-bold text-sm">braydoncoyer</span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
        </div>

        <Image
          className="w-full bg-cover"
          src="/JRM Afbouw Stellen.jpg"
          width={600}
          height={500}
        />

        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer"></i>
            <span className="text-sm text-gray-400 font-medium">12 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">braydoncoyer</span> Lord of the
              Rings is my favorite film-series. One day I'll make my way to New
              Zealand to visit the Hobbiton set!
            </div>
          </div>
          <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
            View all 14 comments
          </div>
          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">razzle_dazzle</span> Dude! How
              cool! I went to New Zealand last summer and had a blast taking the
              tour! So much to see! Make sure you bring a good camera when you
              go!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FotoGalerij;
