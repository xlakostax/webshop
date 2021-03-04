import React from 'react'

/* Import libraries */

import {
  Col,
  Row
} from "react-bootstrap";

/* Import components */

import Product from "../components/Product"

import products from "../products"

const HomeScreens = () => {
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
