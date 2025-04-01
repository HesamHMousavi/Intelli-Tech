import React from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";

const plans = [
  {
    name: "One Pager",
    price: "£175",
    description:
      "Ideal for small business or start ups. Contains basic functionality and limited features.",
    features: [
      "1 Page",
      "3 design revisions",
      "One time domain fee",
      "Free Hosting",
      "Mobile friendly design",
      "Social Media links",
      "Google Maps",
    ],
  },
  {
    name: "Basic",
    price: "£399",
    description:
      "Ideal for small business or start ups. Contains basic functionality and limited features.",
    features: [
      "Up to 5 Pages",
      "5 design revisions",
      "One time domain fee",
      "Hosting for simple charges",
      "Mobile friendly design",
      "Social Media links",
      "Contact form",
      "Customer Reviews",
      "Google Maps",
    ],
  },
  {
    name: "Standard",
    price: "£799",
    description:
      "Designed for growing businesses, offering expanded features and additional tools to help you scale efficiently.",
    features: [
      "Up to 7 Pages",
      "3 design revisions per page",
      "One time domain fee",
      "Hosting for simple charges",
      "Mobile friendly design",
      "Social Media links",
      "Contact form",
      "Whats app contact",
      "Customer Reviews",
      "Google Maps",
      "Server/Database",
      "Login System",
    ],
    highlighted: true,
  },
  {
    name: "Professional",
    price: "£1749",
    description:
      "Equipped with advanced features and premium support, ideal for enterprises maximising efficiency.",
    features: [
      "Up to 12 Pages",
      "5 design revisions per page",
      "One time domain fee",
      "Hosting for simple charges",
      "Mobile friendly design",
      "Social Media links",
      "Contact form",
      "Customer Reviews",
      "Whats app contact",
      "Google Maps",
      "Server/Database",
      "Login System",
      "Custom design",
      "Payment System - Apple/Google pay",
      "Source Code",
    ],
    highlighted: false,
  },
];

const PricingPlans = () => {
  const nav = useNavigate();
  return (
    <>
      <h1 className='t-1' style={{ marginTop: "10rem" }}>
        Choose a Package
      </h1>
      <div className='pricing-container'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.highlighted ? "highlighted" : ""}`}>
            <h3>{plan.name}</h3>
            <p className='description'>{plan.description}</p>
            <div className='price'>
              {plan.price}
              <span> /one-time</span>
            </div>
            <button className='buy-btn' onClick={() => nav("/contact")}>
              Contact us
            </button>
            <ul className='features'>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingPlans;
