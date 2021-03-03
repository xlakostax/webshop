import React from "react";

/* Import libraries */

import {
  Container
} from "react-bootstrap";

/* Import Components */
import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
