import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../styles/customerRating.css";
function CustomerRating() {
  return (
    <section className="customer-rating-section">
      <Row className="align-items-center">
        <Col md={6} className="left-side">
          <h5>What Our Customers Say</h5>
          <h3>
            Don’t just take our word for it – here’s what our customers have to
            say:
          </h3>
          <Card className="rating-card">
            <Card.Body>
              <Card.Text>
                "The best coffee I've ever had! The atmosphere and service were
                exceptional." - Jane Doe
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="rating-card">
            <Card.Body>
              <Card.Text>
                "Absolutely love the espresso here. The baristas know exactly
                how to make it perfect." - John Smith
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="rating-card">
            <Card.Body>
              <Card.Text>
                "A cozy place with top-notch coffee. Highly recommended!" - Emma
                Stone
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="right-side">
          <div className="background-image">
            <img src="/images/Opinion.gif" alt="" />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default CustomerRating;
