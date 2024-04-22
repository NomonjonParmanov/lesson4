import { useState } from "react";
import Products from "./components/Products";
import "./sass/global.scss";
import Navbar from "./components/navbar/Navbar";
import NavbarSecond from "./components/navbar/NavbarSecond";
import Header from "./components/header/Header";
import Sneake from "./components/sneake/Sneake";
import Footer from "./components/footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <NavbarSecond />
      <Header />
      <Products />
      <Sneake />
      <Footer />
    </div>
  );
}

export default App;
