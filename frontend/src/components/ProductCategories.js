import React from "react";
import { Card, Row, Col, Dropdown } from "react-bootstrap";

function ProductCategories({ categories }) {
  return (
    <div className="product-categories my-4">
      <h3 className="section-title">Product Categories</h3>
      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Select Category
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {categories.map((category) => (
            <Dropdown.Item key={category.id} href={`#category-${category.id}`}>
              {category.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} sm={12}>
            <Card className="mb-4 category-card" id={`category-${category.id}`}>
              <Card.Img
                variant="top"
                src={category.image}
                className="category-image"
              />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
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
          color: #333;
        }
        .category-card {
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
        }
        .category-card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          background-color: #f9f9f9;
        }
        .category-image {
          width: 100%;
          height: auto;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .category-card .card-body {
          padding: 1rem;
          background-color: #fafafa;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        .category-card .card-title {
          font-size: 1.25rem;
          color: #007bff;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default ProductCategories;
