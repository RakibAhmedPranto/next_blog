import React from "react";
import Slide from "./_child/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";

function Section1() {
  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

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
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide>
            <Slide data={sl1} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={sl2} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={sl3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Section1;
