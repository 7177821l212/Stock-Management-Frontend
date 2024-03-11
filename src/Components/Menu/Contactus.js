import React from 'react';
import './ContactUs.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import card1 from '../Tittle/card1.png';
import card2 from '../Tittle/card2.png';
import card3 from '../Tittle/card3.png';


const ContactUs = () => {
  return (
    <div className="contain">
   
      <div className="card-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>STOCK-MANAGEMENT</Card.Title>
            <Card.Text>
              We provide a very user-friendly UI-UX to access the website.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Well Organized.</ListGroup.Item>
            <ListGroup.Item>No Collapse With Stocks.</ListGroup.Item>
            <ListGroup.Item>Manage Your Revenue</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#"> Link</Card.Link>
            <Card.Link href="#"> Link</Card.Link>
          </Card.Body>
        </Card>
      </div>

    
      <div className="card-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title> REVENUE-MANAGEMENT</Card.Title>
            <Card.Text>
              you can manage your monthly revenue of the shop,and indentify the low selling and most selling.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Monthly Revenue.</ListGroup.Item>
            <ListGroup.Item>Low and Most Selling Stock.</ListGroup.Item>
            <ListGroup.Item>You Can Attain Max Revenue.</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#"> Link</Card.Link>
            <Card.Link href="#"> Link</Card.Link>
          </Card.Body>
        </Card>
      </div>

     
      <div className="card-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Title>ADMIN-ACCESS</Card.Title>
            <Card.Text>
              Everything cannot be accessed by everyone,some of them are protected by admin access .
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Revenue Access</ListGroup.Item>
            <ListGroup.Item>Edit and Delete The Stocks</ListGroup.Item>
            <ListGroup.Item>Dowload a Revenue Report</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#"> Link</Card.Link>
            <Card.Link href="#"> Link</Card.Link>
          </Card.Body>
        </Card>
      </div>

      {/* <div className="ContactUs-container">
        <div className="Copyright-text">
          <p>&copy; 2023 Stock Management. All rights reserved.</p>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
