import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./Author";

function Slide({ data }) {
  return (
    <div className="grid px-2 space-y-4 sm:space-x-4 md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image
              src={data?.photo}
              width={600}
              height={600}
              alt="slide image"
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <div className="cat">
          <Link href="/">
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link href="/">
            <a className="text-gray-800 hover:text-gray-600">-Jun 4,2022</a>
          </Link>
        </div>

        <div className="title flex justify-center flex-col">
          <Link href={"/"}>
            <a className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author data={data.author} />
      </div>
    </div>
  );
}

export default Slide;
