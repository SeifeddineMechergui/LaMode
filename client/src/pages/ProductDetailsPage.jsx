import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import SuggestProduct from "../components/Products/SuggestProduct";
import ProductsDetail from "../components/Products/ProductsDetail";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const event = allEvents && allEvents.find((i) => i._id === id);
      setData(event);
    } else {
      const product = allProducts && allProducts.find((i) => i._id === id);
      // console.log("🚀 ~ useEffect ~ allProducts:", allProducts)
      // console.log("🚀 ~ useEffect ~ product:", product)
      setData(product);
    }
  }, [allProducts, allEvents, eventData, id]);

  return (
    <div>
      <Header />
      <br />
      <ProductsDetail data={data} />
      {!eventData && <>{data && <SuggestProduct data={data} />}</>}
      <br />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
