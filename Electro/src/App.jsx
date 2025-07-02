import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Header from './views/Layout/Header/Header';
import ProductCard from './views/Components/ProductCard/ProductCard';
import Card from './views/Components/Card/Card';
import Navbar from './views/Components/Navbar/Navbar';
import './App.css';

const cardData = [
  { id: 1, img: "product01.png.webp" },
  { id: 2, img: "product03.png.webp" },
  { id: 3, img: "product04.png.webp" },
  { id: 4, img: "product05.png.webp" },
];

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container my-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {cardData.map(card => (
            <SwiperSlide key={card.id}>
              <ProductCard img={card.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default App;
