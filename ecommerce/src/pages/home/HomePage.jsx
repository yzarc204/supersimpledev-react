import { useEffect, useState } from "react";
import axios from "axios";

import { ProductsGrid } from "./ProductsGrid";
import { Header } from "../../components/Header";

import "./HomePage.css";
import FavIcon from "../../assets/images/home-favicon.png";
import { useSearchParams } from "react-router";

export function HomePage({ cart, loadCart }) {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const endpoint = `/api/products${searchText ? `?search=${searchText}` : ''}`;
      const response = await axios.get(endpoint);
      setProducts(response.data);
    };

    getHomeData();
  }, [searchText]);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/png" href={FavIcon} />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
