import "./App.css";
import { Header } from "./components/Header";

import Carrousel from "./components/carousel";
import ProductPage from "./components/productPage";

export default function App() {
  return (
    <>
      <Header />
      <Carrousel />
      <ProductPage />
    </>
  );
}
