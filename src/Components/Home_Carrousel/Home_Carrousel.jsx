import Carousel from 'react-bootstrap/Carousel';
import event_banner_1 from '../Assests/event_banner_1.jpg';
import event_banner_2 from '../Assests/event_banner_2.jpg';
import event_banner_3 from '../Assests/event_banner_1.jpg';


function Home_Carrousel() {
  return (
    <div style={{height:"1%" }}>
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={event_banner_3}
          alt="First slide"
          // dd
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{ width: '10%', height: '10%' }}
          className="d-block w-100"
          src={event_banner_2 }
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={event_banner_1}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home_Carrousel;