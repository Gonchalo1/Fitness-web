
import '../../App.css';
import Image from '../images/fondoMel.png';
import Image2 from '../images/fondoMel2.jpeg';
import Image3 from '../images/fondoMel13.jpeg';
import CarouselClient from './carouselClient';
import CarouselClient2 from './carouselClient2';

function Client() {

  return (
    <div className="client-container">
      <img className='client-img' src={Image} alt="Coach" />
      <p className="client-text">Recorrido</p>
      
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
      <p  className="client-text">Sobre mi y mi marca</p>
      <img  className='client-img2' src={Image2} alt="Enlarged Image"/>

      <p  className="client-text">Equipo</p>
      <CarouselClient/>

      <img  className='client-img2' src={Image3} alt="Enlarged Image" />

      <p  className="client-text">Melina</p>
      <CarouselClient2/>
    </div>
  );
}

export default Client;
