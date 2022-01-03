import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, { Pagination,Navigation } from 'swiper';
import '../styles/Projects.css';
import { projects } from '../data/projects.js'

SwiperCore.use([Pagination,Navigation]);

function Projects(){
  return(
    <div>
    <Swiper
  
    spaceBetween={15}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className="mySwiper"
  >
    {projects.map(project => (
      <SwiperSlide
      className='slider'
      key={project.id}
      >
      <div className='slider2'
      > {project.projectName}
      <a href={project.website}> Click Here </a>
      <img
      src={require('../assets/Images/' + project.image + '.png')} alt={project.projectName} />
      </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
  );
};

export default Projects