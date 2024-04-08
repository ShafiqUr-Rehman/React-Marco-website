// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../assets/user1.jpg"
import image2 from "../assets/user2.jpg"
import image3 from "../assets/user3.jpg"
import image4 from "../assets/user4.jpg"
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


function Testimonial() {
  return (
    <div className='testimonial h-[75vh] sm:h-[70vh] lg:h-[90vh] xl:h-screen w-full'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className='swiperSlide flex flex-col '>
          <img className='h-20 w-20 object-cover mb-4' src={image1} alt="" />
          <h2 className='pb-1 font-bold'>John Doe</h2>
          <div className="flex items-center gap-3">
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar />
          </div>
          <p className='text-center max-w-[600px] pt-4 italic text-dimWhite px-2'> &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae rem sequi molestias in modi incidunt rerum asperiores, dicta repellat et reprehenderit deleniti, neque sapiente? &quot;</p>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide flex flex-col '>
          <img className='h-20 w-20 object-cover mb-4' src={image2} alt="" />
          <h2 className='pb-1 font-bold'>John Doe</h2>
          <div className="flex items-center gap-3">
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar />
          </div>
          <p className='text-center max-w-[600px] pt-4 italic text-dimWhite px-2'> " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae rem sequi molestias in modi incidunt rerum asperiores, dicta repellat et reprehenderit deleniti, neque sapiente? "</p>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide flex flex-col '>
          <img className='h-20 w-20 object-cover mb-4' src={image3} alt="" />
          <h2 className='pb-1 font-bold'>John Doe</h2>
          <div className="flex items-center gap-3">
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar />
          </div>
          <p className='text-center max-w-[600px] pt-4 italic text-dimWhite px-2'> " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae rem sequi molestias in modi incidunt rerum asperiores, dicta repellat et reprehenderit deleniti, neque sapiente? "</p>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide flex flex-col '>
          <img className='h-20 w-20 object-cover mb-4' src={image4} alt="" />
          <h2 className='pb-1 font-bold'>John Doe</h2>
          <div className="flex items-center gap-3">
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar className='text-[#ffc000]' />
            <FaStar />
          </div>
          <p className='text-center max-w-[600px] pt-4 italic text-dimWhite px-2'> " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae rem sequi molestias in modi incidunt rerum asperiores, dicta repellat et reprehenderit deleniti, neque sapiente? "</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial;