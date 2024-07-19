import React, { useEffect, useRef } from 'react';
import '../../App.css';
import Image from '../images/fondoMel.png';
import Image2 from '../images/fondoMel2.jpeg';

function Client() {
  const imageRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && textRef1.current && textRef2.current && imageRef2.current) {
        const imageElement = imageRef.current;
        const textElement1 = textRef1.current;
        const textElement2 = textRef2.current;
        const imageElement2 = imageRef2.current;

        const rect = imageElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Parallax Effect
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const offset = -rect.top * 0.1;
          imageElement.style.transform = `translateY(${offset}px)`;

          const textOffset1 = rect.top * 0.1;
          textElement1.style.transform = `translateX(${textOffset1}px)`;

          const textOffset2 = -rect.top * 0.1;
          textElement2.style.transform = `translateX(${textOffset2}px)`;
        }

        // Zoom Effect for the second image
        if (imageElement2) {
          const rect2 = imageElement2.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const zoomFactor = 1 + ((windowHeight - rect2.bottom) / windowHeight) * 0.3;

          // Limitar el tamaño máximo para evitar el desbordamiento
          const maxZoom = 1.5; // Ajusta este valor según lo necesario
          const constrainedZoom = Math.min(zoomFactor, maxZoom);

          // Aplicar el zoom a la imagen
          imageElement2.style.transform = `scale(${constrainedZoom})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="client-container">
      <img ref={imageRef} className='client-img' src={Image} alt="Coach" />
      <p ref={textRef1} className="client-text">Este es el texto que se desliza a la derecha</p>
      
      <span className='biografy'> 
        ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
      </span>
      <p ref={textRef2} className="client-text">Este es el texto que se desliza a la izquierda</p>
      <img ref={imageRef2} className='client-img2' src={Image2} alt="Enlarged Image"/>
    </div>
  );
}

export default Client;
