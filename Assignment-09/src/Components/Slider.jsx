import React from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import i1 from '../assets/i1.png'
import i2 from '../assets/i2.png'
import  i3 from '../assets/i3.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Slider = () => {
  return (
    <>
    <div className='relative max-w-7xl hidden lg:flex '>
      <div className="  custom-prev absolute left-3 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow cursor-pointer items-center justify-center">
        <ChevronLeft className='' size={24} />
      </div>

      <div className=" custom-next absolute right-3 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow cursor-pointer  items-center justify-center">
        <ChevronRight size={24} />
      </div>


        <Swiper
  slidesPerView={1}
  speed={1100}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}
  spaceBetween={30}
  loop={true}
  pagination={{ clickable: true }}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}

  modules={[Pagination, Navigation, Autoplay]}
  className="mySwiper"
>

        <SwiperSlide><img  className='' src={i1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='hidden lg:flex' src={i2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='hidden lg:flex' src={i3} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
    <div className=' lg:hidden'>
      <img  className='' src={i1} alt="" />
    </div>
    </>
  );
};

export default Slider;