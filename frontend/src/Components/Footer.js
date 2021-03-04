import React from 'react'

/* Import libraries */

import {
  Col,
  Container,
  Row,
} from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
          <Row> 
            <Col className="text-center py-3">
              Copyrights &copy; Pizza House
            </Col>
          </Row>
      </Container>
    </footer>
  )
}

export default Footer
