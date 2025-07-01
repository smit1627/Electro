import React from 'react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'react-tooltip/dist/react-tooltip.css'

import Header from './views/Layout/Header/Header';
import ProductCard from './views/Components/ProductCard/ProductCard';
import './App.css';
import Card from './views/Components/Card/Card';
import Navbar from './views/Components/Navbar/Navbar';

const cardData = [
  { id: 1, title: "Card 1", img: "logo.png.webp" },
  { id: 2, title: "Card 2", img: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*iU4yMgW38GDdrnVbjTb5MQ.jpeg" },
  { id: 3, title: "Card 3", img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*tGHAV9yItR_FISNYM7HGqQ.gif" },
  { id: 4, title: "Card 4", img: "logo.png.webp" },
  { id: 5, title: "Card 5", img: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*iU4yMgW38GDdrnVbjTb5MQ.jpeg" }
];

function App() {
  return (
    <>


      {/* <Header /> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProductCard img="product01.png.webp" />
          </div>
          <div className="col-lg-3">
            <ProductCard img="product03.png.webp" />
          </div>
          <div className="col-lg-3">
            <ProductCard img="product04.png.webp" />
          </div>
          <div className="col-lg-3">
            <ProductCard img="product05.png.webp" />
          </div>
        </div>
      </div> */}

      {/* <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <Card />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <Card />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <Card />
          </div>
        </div>
      </div> */}
      {/* <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}

          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,// Mobile
              // slidesPerGroup: 1,
            },
            576: {
              slidesPerView: 2,
              // slidesPerGroup: 1,// Small tablets
            },
            768: {
              slidesPerView: 3,
              // slidesPerGroup: 1,// Tablets
            },
            1024: {
              slidesPerView: 4,
              // slidesPerGroup: 1,// Desktops
            },
          }}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <ProductCard img="product01.png.webp" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <Navbar />
    </>
  );
}

export default App;
