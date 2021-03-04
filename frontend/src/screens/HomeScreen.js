import React, {
  useEffect,
  useState,
}
from 'react'

/* Import libraries */
import axios from "axios";
import {
  Col,
  Row
} from "react-bootstrap";

/* Import components */ 

import Product from "../components/Product"

const HomeScreens = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    }
    fetchProducts()
  }, [])
  return (
    <>
      <h1>New Pizzas</h1>
      <Row>
        {products.map((product, index) => 
          <Col sm={12} md={6} lg={4} xl={3} key={index}>
            <Product product={product} />
          </Col>
        )}
      </Row>
    </>
  )
}

export default HomeScreens
