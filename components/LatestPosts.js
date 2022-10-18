import React from "react";
import Post from "./_child/Post";

function LatestPosts() {
  const sl1 = {
    photo: "/images/img1.jpg",
    author: {
      name: "Rakib Ahmed",
      designation: "Software Engineer",
    },
  };
  const sl2 = {
    photo: "/images/img2.jpg",
    author: {
      name: "Rubayet Rumi",
      designation: "Sr. Software Engineer",
    },
  };
  const sl3 = {
    photo: "/images/img3.png",
    author: {
      name: "Suhel",
      designation: "Software Engineer",
    },
  };

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        <Post data={sl1} />
        <Post data={sl2} />
        <Post data={sl3} />
        <Post data={sl1} />
        <Post data={sl2} />
        <Post data={sl3} />
      </div>
    </section>
  );
}

export default LatestPosts;
