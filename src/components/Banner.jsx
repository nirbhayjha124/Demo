import React, {  useRef } from 'react';
import {  galleryImage } from './data/gallery';
import {  Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react';




function Banner() {

  //  const scrollRef = useRef();

  //   const scroll = (direction) => {
  //     const container = scrollRef.current;
  //     if (container) {
  //       const scrollAmount = container.offsetWidth / 2; // show 2 images
  //       container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  //     }
  //   };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="mx-auto mt-2 h-[240px]  sm:h-[250px] md:h-[240] 2xl:h-[400px] w-[80vw] overflow-hidden">

       <button
        ref={prevRef}
        className="absolute left-2 top-1/2 z-10 -translate-y-28 translate-x-40 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
      >
        <ChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 z-10 -translate-y-28 -translate-x-40 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
      >
        <ChevronRight />
      </button>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper rounded-2xl"
      >
        {galleryImage.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={img.Img}
              alt=""
              className="object-cover w-full h-full object-left-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


  );
}

export default Banner;
