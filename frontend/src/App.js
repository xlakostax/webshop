import React from "react";

/* Import libraries */

import {
  Container
} from "react-bootstrap";

/* Import Components */
import Header from "./Components/Header"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Shop!</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
