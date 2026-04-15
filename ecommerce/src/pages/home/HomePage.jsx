import { useEffect, useState } from "react";
import axios from "axios";

import { ProductsGrid } from "./ProductsGrid";
import { Header } from "../../components/Header";

import "./HomePage.css";
import FavIcon from "../../assets/images/home-favicon.png";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/png" href={FavIcon} />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
