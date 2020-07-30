import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Swiper/swiper-bundle.min.css';

import insta from './images/insta.png';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';
import img6 from './images/6.jpeg';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpeg';
import img9 from './images/9.jpeg';

import img11 from './images/11.jpeg';
import img12 from './images/12.jpeg';
import img13 from './images/13.jpeg';
import img14 from './images/14.jpeg';
import img15 from './images/15.jpeg';
import img16 from './images/16.jpeg';
import img17 from './images/17.jpeg';

import img19 from './images/19.jpeg';
import img20 from './images/20.jpeg';
import img21 from './images/21.jpeg';
import img22 from './images/22.jpeg';



function App() {
  return (
    <div className="App">
      <h1 className="text-dark pt-2 pb-2">Bon appetit</h1>
      <h5 className="pb-2" style={{backgroundColor:"rgb(200,200,200,0.3)", borderRadius:"10px", width:"90%", display:"inline-block"}}>
        Pastelería, panadería y repostería
      </h5>

      <h6>Tortas</h6>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{backgroundImage:"url("+img1+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img2+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img3+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img4+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img5+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img6+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img7+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img8+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img9+")"}}></div>
        </div>
        
        <div className="swiper-pagination"></div>
      </div>

      <h6>Tartas y pastafrolas</h6>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{backgroundImage:"url("+img11+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img12+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img13+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img14+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img15+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img16+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img17+")"}}></div>
        </div>
        
        <div className="swiper-pagination"></div>
      </div>

      <h6>Más</h6>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{backgroundImage:"url("+img19+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img20+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img21+")"}}></div>
          <div className="swiper-slide" style={{backgroundImage:"url("+img22+")"}}></div>
        </div>
        
        <div className="swiper-pagination"></div>
      </div>

      <h5 className="pt-3">
        <div>Consultas/Pedidos!</div>
        <div><a href="https://www.instagram.com/bon_appetit_encasa/"><img src={insta} style={{width:"40px"}}/>bon_appetit_encasa</a></div>
        <div>📲3415148598</div>
      </h5>
    </div>
  );
}

export default App;
