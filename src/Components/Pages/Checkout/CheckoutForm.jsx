import React, { useContext, useState } from "react";
import { ContentContext } from "../../../Context/Content/ContentState";
import { v4 as uuidv4 } from "uuid";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import "./CheckoutForm.css";
import "../../util/core.css";

const Form = () => {
  const { Basket, UpdateBasket, Total, CreateAlert, RemoveFromBasket } =
    useContext(ContentContext);

  // State to store form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    postCode: "",
    streetAddress: "",
    houseNumber: "",
    phoneNumber: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to validate inputs
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  // Checkout function
  const handleCheckout = async () => {
    // // FEATURE COMING SOON

    CreateAlert({
      id: uuidv4(),
      alert: "COMING SOON",
      type: "default",
    });

    // return;

    if (!isFormValid()) {
      CreateAlert({
        id: uuidv4(),
        alert: "Please fill in all fields.",
        type: "error",
      });

      return;
    }

    try {
      const { data } = await axios.post("http://192.168.1.110:5001/payment", {
        items: Basket,
        customerDetails: formData, // Include form data in request
      });

      window.location.href = data.url; // Redirect to Stripe Checkout page
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  // Function to update basket item quantity
  const onChange = (e, item) => {
    UpdateBasket(item, Number(e.target.value));
  };

  return (
    <div className="max-wid2">
      <div className="checkout-form-con">
        <div className="checkout-form">
          {Basket?.length > 0 ? (
            <>
              <header>
                <div className="shaded">
                  <h2>Product</h2>
                  <h2>Price</h2>
                  <h2>Quantity</h2>
                  <h2>Subtotal</h2>
                </div>
                {Basket?.length > 0 &&
                  Basket.map((item, idx) => (
                    <div key={idx}>
                      <RxCross2
                        size={30}
                        className="crossBtn"
                        onClick={() => RemoveFromBasket(item.Name)}
                      />
                      <h3>{item.Name}</h3>
                      <h3>£{item.Price}</h3>
                      <input
                        type="number"
                        value={item.Quantity}
                        min={0}
                        onChange={(e) => onChange(e, item)}
                      />
                      <h3>£{item.Quantity * item.Price}</h3>
                    </div>
                  ))}
              </header>
              <main>
                <div className="left">
                  <h3 className="title-6">Name</h3>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                  />
                  <h3 className="title-6">Address</h3>
                  <input
                    type="text"
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleInputChange}
                    placeholder="Post Code"
                    required
                  />
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="Street Address"
                    required
                  />
                  <input
                    type="text"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleInputChange}
                    placeholder="House Number"
                    required
                  />
                  <h3 className="title-6">Phone Number</h3>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    pattern="[0-9]{10,15}"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="right">
                  <h2 className="title-2">Total</h2>
                  <div className="border-bottom-none">
                    <h2>Subtotal</h2>
                    <h2>£{Total}</h2>
                  </div>
                  <div>
                    <h2>Total</h2>
                    <h2>£{Total}</h2>
                  </div>
                  <button
                    className="btn mg-1"
                    onClick={handleCheckout}
                    // disabled={!isFormValid()} // Disable if form is not valid
                  >
                    Proceed to checkout
                  </button>
                </div>
              </main>
            </>
          ) : (
            <div className="empty">
              <h1 className="title-2">Your basket is empty </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
