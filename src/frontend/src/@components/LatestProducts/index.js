import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "../../@components";
import axios from "axios";

export const LatestProducts = () => {
  const [products, setLatestProducts] = useState({});

  useEffect(
    () => {
      // runs as soon as the component loads
      const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products`);
        setLatestProducts(data);
      };

      fetchProduct();
    },
    [] /* use effects fires off when this dependency changes */
  );

  return (
    <div>
      <h1> Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LatestProducts;
