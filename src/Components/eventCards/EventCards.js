import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventCards(props) {
  return (
    <Card style={{ width: '18rem' ,top:"10vh" }}>
      <Card.Img variant="top" alt="holder.js/100px180" src={props.imgLink}/>
      <Card.Body>
        <Card.Title> Imagine </Card.Title>
        <Card.Text>
      
        </Card.Text>
        <Button variant="primary">View Portfolio</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCards;