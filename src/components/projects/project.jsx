import React from "react"
import "./projects.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import one from "../../img/Elias.jpg"
import two from "../../img/Facebook.png"
import three from "../../img/amazon.png"
import four from "../../img/boy.png"
import { Pagination } from "swiper/modules"
import "swiper/css/pagination"

const Project = () => {
  const swy = [
    {
      name: "puru lvyufh cc hvfhewful lluhwfvdb uhhwfv lvi ubhlbvfv",
      img: one,
    },
    {
      name: "puru",
      img: two,
    },
    {
      name: "Valeria",
      img: three,
    },
    {
      name: "Valeria",
      img: four,
    },
  ]
  return (
    <div className="projects">
      <Swiper
        className="swiper"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {swy.map((sw, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="project">
                <img src={sw.img} alt="" />
                <span>{sw.name}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Project
