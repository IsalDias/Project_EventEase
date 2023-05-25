import React, { useState } from "react";
import EventCards from "../Components/eventCards/EventCards";
import { Col, Row } from "react-bootstrap";
import img from '../Components/Assests/card_1.jpg'

export default function Events() {
  const [events, setEvents] = useState([
    {
      imgLink: "sdfgusahguio",
      title: "title 1",
    },
    {
      imgLink: "sdfgusahguio",
      title: "title 2",
    },
    {
        imgLink: "sdfgusahguio",
        title: "title 2",
      },
      {
        imgLink: "sdfgusahguio",
        title: "title 2",
      },


  ]);

  const handleClick = () => {
    alert("Clicked")
  }

  return (
    <>
      <Row style={{width:"100%", padding:"0 4% 0 "}}>
        {events.map((event) => {
          return (
            <Col lg={3} md={6}>
              <EventCards title={event.title} imgLink={img}/>;
            </Col>
          );
        })}
      </Row>
    </>
  );
}
