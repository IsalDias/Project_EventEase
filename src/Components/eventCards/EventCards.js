import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventCards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" alt="holder.js/100px180" src={props.imgLink}/>
      <Card.Body>
        <Card.Title> Imagine </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View Portfolio</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCards;