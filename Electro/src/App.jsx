// App.jsx
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import 'react-tooltip/dist/react-tooltip.css'

import ProductCard from './views/Components/ProductCard/ProductCard';

// const cardData = [
//   { id: 1, title: "Card 1", img: "logo.png.webp" },
//   { id: 2, title: "Card 2", img: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*iU4yMgW38GDdrnVbjTb5MQ.jpeg" },
//   { id: 3, title: "Card 3", img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*tGHAV9yItR_FISNYM7HGqQ.gif" },
//   { id: 4, title: "Card 4", img: "logo.png.webp" },
//   { id: 5, title: "Card 5", img: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*iU4yMgW38GDdrnVbjTb5MQ.jpeg" }
// ];

function App() {
  return (
    // <div className="container my-5">
    //   <Swiper
    //     modules={[Autoplay]}
    //     spaceBetween={30}
    //     slidesPerView={4}
    //     autoplay={{ delay: 2000, disableOnInteraction: false }}
    //     loop={true}
    //   >
    //     {cardData.map((card) => (
    //       <SwiperSlide key={card.id}>
    //         <div className="card product-card shadow-sm">
    //           <img src={card.img} className="card-img-top" alt={card.title} />
    //           <div className="card-body">
    //             <h5 className="card-title">{card.title}</h5>
    //             <p className="card-text">This is a card in Swiper.</p>
    //             <a href="#" className="btn btn-primary">View</a>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    <>


      <div className="container">
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
      </div>
    </>
  );
}

export default App;
