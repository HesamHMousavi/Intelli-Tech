import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import CheckoutForm from "./CheckoutForm";
import Footer from "../../Footer/Footer";

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Banner height="200px" title="Checkout" />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
