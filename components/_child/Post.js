import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./Author";

function Post({ data }) {
  return (
    <div className="item mx-auto justify-center rounded-md ring-1">
      <div className="images">
        <Image
          src={data?.photo}
          width={500}
          className="rounded-md"
          height={350}
          alt="slide image"
        />
      </div>
      <div className="info justify-center flex-col py-4 px-1">
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
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
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
        <Author data={data?.author} />
      </div>
    </div>
  );
}

export default Post;
