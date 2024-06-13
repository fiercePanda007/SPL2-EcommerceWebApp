import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function LatestNews({ news }) {
  return (
    <div className="latest-news my-4">
      <h3 className="section-title">Latest News</h3>
      <Row>
        {news.map((item, index) => (
          <Col key={index} sm={12}>
            <Card className="mb-4 news-card">
              <Card.Img variant="top" src={item.image} className="news-image" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <style jsx>{`
        .section-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        .news-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .news-card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .news-image {
          width: 100%;
          height: auto;
        }
        .news-card .card-body {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}

export default LatestNews;
