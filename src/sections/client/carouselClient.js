import React from 'react';
import '../../App.css';
import Image1 from '../images/melEquipo2.jpeg';
import Image2 from '../images/melEquipo2.jpeg';
import Image3 from '../images/melEquipo3.jpeg';
import Image4 from '../images/melEquipo4.jpeg';
import Image5 from '../images/fondoMel3.jpeg';
import Image6 from '../images/fondoMel3.jpeg';
import Image7 from '../images/fondoMel3.jpeg';
import Image8 from '../images/fondoMel3.jpeg';
import Image9 from '../images/fondoMel3.jpeg';

function CarouselClient() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-images">
              <img src={Image1} className="d-block" alt="Miembros del equipo entrenando" />
              <img src={Image2} className="d-block" alt="Siguen entrenando" />
              <img src={Image3} className="d-block" alt="Entrenan todavia mas :)" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-images">
              <img src={Image4} className="d-block" alt="Guau como entrena esta gente OMG" />
              <img src={Image5} className="d-block" alt="Como hacer para vivír????" />
              <img src={Image6} className="d-block" alt="Acaso hacen la FOTOSINTESIS?" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-images">
              <img src={Image7} className="d-block" alt="Nose xd" />
              <img src={Image8} className="d-block" alt="Que buena gente lpm" />
              <img src={Image9} className="d-block" alt="Que bien entrenan" />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarouselClient;
