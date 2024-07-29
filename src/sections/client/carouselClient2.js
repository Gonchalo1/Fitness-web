import React from 'react';
import '../../App.css';
import Image1 from '../images/fondoMel4.jpeg';
import Image2 from '../images/fondoMel5.jpeg';
import Image3 from '../images/fondoMel6.jpeg';
import Image4 from '../images/fondoMel7.jpeg';
import Image5 from '../images/fondoMel8.jpeg';
import Image6 from '../images/fondoMel9.jpeg';
import Image7 from '../images/fondoMel10.jpeg';
import Image8 from '../images/fondoMel11.jpeg';
import Image9 from '../images/fondoMel12.jpeg';

function CarouselClient2() {
  return (
    <div>
      <div id="carouselExampleIndicators2" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-images">
              <img src={Image1} className="d-block" alt="Slide 1" />
              <img src={Image2} className="d-block" alt="Slide 1" />
              <img src={Image3} className="d-block" alt="Slide 1" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-images">
              <img src={Image4} className="d-block" alt="Slide 2" />
              <img src={Image5} className="d-block" alt="Slide 2" />
              <img src={Image6} className="d-block" alt="Slide 2" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-images">
              <img src={Image7} className="d-block" alt="Slide 3" />
              <img src={Image8} className="d-block" alt="Slide 3" />
              <img src={Image9} className="d-block" alt="Slide 3" />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarouselClient2;
