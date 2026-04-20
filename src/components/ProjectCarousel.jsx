import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCarousel = ({ images }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={0}
    slidesPerView={1}
    style={{ maxWidth: "600px", maxHeight: "600px", margin: "0 auto" }}
  >
    {images.map((img, i) => (
      <SwiperSlide key={i}>
        <img
          src={typeof img === "string" ? img : img.src}
          alt={img.alt || ""}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProjectCarousel;
