import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import cat from "../assets/cat.jpg";
import adopt from "../assets/adopt.jpg";
import slide3 from "../assets/slide3.avif";

// Swiper styles
import 'swiper/css/bundle';

// modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';

const SwiperPaw = () => {
  return (
    <div className="w-full h-[450px] overflow-hidden shadow-lg">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        speed={1000}
        autoplay={{
          delay:1300,
          disableOnInteraction:false
        }}
        loop={true}
      
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay]}
        className="w-full h-full"
      >

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={cat} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-5">
                Find Your Furry Friend Today!
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={adopt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-5">
                Adopt, Don’t Shop — Give a Pet a Home.
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={slide3} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-5">
                Because Every Pet Deserves Love and Care.
              </h1>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default SwiperPaw;
