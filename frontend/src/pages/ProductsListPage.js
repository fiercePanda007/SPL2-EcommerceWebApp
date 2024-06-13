import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../actions/productActions";
import Message from "../components/Message";
import { Spinner, Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import { useHistory } from "react-router-dom";
import { CREATE_PRODUCT_RESET } from "../constants";
import Footer from "../components/Footer";
import ProductCategories from "../components/ProductCategories";
import LatestNews from "../components/LatestNews";

function ProductsListPage() {
  let history = useHistory();
  let searchTerm = history.location.search;
  const dispatch = useDispatch();

  const productsListReducer = useSelector((state) => state.productsListReducer);
  const { loading, error, products } = productsListReducer;

  useEffect(() => {
    dispatch(getProductsList());
    dispatch({
      type: CREATE_PRODUCT_RESET,
    });
  }, [dispatch]);

  const showNothingMessage = () => {
    return (
      <div>
        {!loading ? <Message variant="info">Nothing to show</Message> : ""}
      </div>
    );
  };

  const categories = [
    { id: 1, name: "Electronics", image: "/images/electronics.png" },
    { id: 2, name: "Books", image: "/images/books.png" },
    { id: 3, name: "Clothing", image: "/images/clothing.png" },
  ];

  const news = [
    { title: "New Product Launch!", image: "/images/news1.png" },
    { title: "Summer Sale starts tomorrow", image: "/images/news2.png" },
    { title: "Company hits record sales", image: "/images/news3.png" },
  ];

  return (
    <div>
      <Container>
        {error && <Message variant="danger">{error}</Message>}
        {loading && (
          <span style={{ display: "flex" }}>
            <h5>Getting Products</h5>
            <span className="ml-2">
              <Spinner animation="border" />
            </span>
          </span>
        )}
        <ProductCategories categories={categories} />

        <Row>
          {products.filter((item) =>
            item.name
              .toLowerCase()
              .includes(searchTerm !== "" ? searchTerm.split("=")[1] : "")
          ).length === 0
            ? showNothingMessage()
            : products
                .filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(searchTerm !== "" ? searchTerm.split("=")[1] : "")
                )
                .map((product, idx) => (
                  <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <div className="mx-2">
                      <Product product={product} />
                    </div>
                  </Col>
                ))}
        </Row>
      </Container>
      <LatestNews news={news} />
      <Footer />
      <style jsx>{`
        .section-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default ProductsListPage;
