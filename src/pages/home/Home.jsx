import Carousel from 'react-bootstrap/Carousel';
import event_banner_1 from '../../Components/Assests/card_1.jpg';
import event_banner_2 from '../../Components/Assests/event_banner_2.jpg';
import event_banner_3 from '../../Components/Assests/event_banner_3.jpg';


function UncontrolledExample() {
  return (
    <div style={{padding:'90px 300px 0px', maxheight:'auto'}}>
    <Carousel className='carousel' style={{height:"auto"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={event_banner_3}
          alt="First slide"
          // dd
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
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
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={event_banner_1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;