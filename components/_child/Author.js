import Image from "next/image";
import Link from "next/link";
import React from "react";

function Author({ data }) {
  return (
    <div className="author flex py-5">
      <Image
        src={"/images/author/author1.jpg"}
        width={60}
        height={60}
        alt="author"
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <a className="text-md font-bold text-gray-800">{data?.name}</a>
        </Link>
        <span className="text-sm text-gray-500">{data?.designation}</span>
      </div>
    </div>
  );
}

export default Author;
