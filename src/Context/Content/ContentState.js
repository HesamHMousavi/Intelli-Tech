import { createContext, useReducer, useEffect, useRef } from "react";
import ContentReducer from "./ContentReducer";
import { SET_CONTENT, SET_BASKET, SET_TOTAL, SET_ALERTS } from "../TYPES";
import { v4 as uuidv4 } from "uuid";

import Exam1Img1 from "../../Images/Project1/img1.png";
import Exam1Img2 from "../../Images/Project1/img2.png";
import Exam1Img3 from "../../Images/Project1/img3.png";

import Exam2Img1 from "../../Images/Project2/img1.png";
import Exam2Img2 from "../../Images/Project2/img2.png";
import Exam2Img3 from "../../Images/Project2/img3.png";

import Exam3Img1 from "../../Images/Project3/img1.png";
import Exam3Img2 from "../../Images/Project3/img2.png";
import Exam3Img3 from "../../Images/Project3/img3.png";

import Exam4Img1 from "../../Images/Project4/img1.png";
import Exam4Img2 from "../../Images/Project4/img2.png";
import Exam4Img3 from "../../Images/Project4/img3.png";
import Exam4Img4 from "../../Images/Project4/img4.png";
import Exam4Img5 from "../../Images/Project4/img5.png";
import Exam4Img6 from "../../Images/Project4/img6.png";
import Exam4Img7 from "../../Images/Project4/img7.png";

export const ContentContext = createContext();

export const ContextState = (props) => {
  const alertRef = useRef("");
  const initialState = {
    Projects: [
      {
        Title: "Flux Fitness",
        Client: "TradeX",
        SubTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit",
        Description: [
          "Unleash your full potential at Flux Fitness, where cutting-edge training meets an electrifying atmosphere. Designed for athletes and fitness enthusiasts alike, our state-of-the-art sports center offers everything you need to push your limits and achieve your goals.",
          "From high-performance training zones to expertly designed workout spaces, our facility is equipped with top-tier equipment, immersive fitness technology, and specialized programs tailored for all levels.",
          "Elevate your fitness journey with dynamic group classes, personal training sessions, and recovery zones that ensure you perform at your peak. Whether you're building strength, improving endurance, or refining your technique, Flux Fitness is the ultimate destination for champions.",
        ],

        Features: [
          "Mobile friendly design",
          "More than 5 Distinct Pages",
          "12 Months Free Hosting",
          "Secure Payment System",
          "Secure Booking System",
          "Hosted Database",
          "Custom design",
        ],
        Imgs: [
          Exam4Img1,
          Exam4Img2,
          Exam4Img3,
          Exam4Img4,
          Exam4Img5,
          Exam4Img6,
          Exam4Img7,
        ],
      },
      {
        Title: "Riding Cities",
        Client: "NeuralX",
        SubTitle: "",
        Description: [
          "Discover the thrill of exploring vibrant cities on two wheels with Riding Cities. Whether you're a local looking for a new perspective or a traveler eager to immerse yourself in a city's heartbeat. our guided bike and scooter tours offer the perfect way to experience urban landscapes in an exciting, eco-friendly way.",
          "With Riding Cities, every ride is an adventure. Glide through bustling streets, hidden alleys, and scenic routes as our expert guides share fascinating stories and local secrets. From historical landmarks to modern hotspots, our tours are designed to bring each city’s unique character to life.",
          "Why walk when you can ride? Our electric scooters and bicycles provide a fun, sustainable, and effortless way to navigate the city. Whether you prefer a self-guided ride or a group tour with a knowledgeable guide, we have options to suit every explorer’s style.",
        ],
        Features: [
          "Mobile friendly design",
          "6 Months Free Domain",
          "Google Maps",
          "Contact form",
          "Custom design",
        ],
        Imgs: [Exam1Img1, Exam1Img2, Exam1Img3],
      },
      {
        Title: "Comfort Furnitures",
        Client: "CloudSync",
        SubTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit",
        Description: [
          "Your home is more than just a space—it’s a reflection of your personality, your style, and your comfort. At Comfort Furnitures.",
          "Our collection is carefully curated to blend modern aesthetics with timeless comfort. We take pride in offering ergonomically designed seating, durable wooden craftsmanship, and elegant upholstery that elevate any space.",
          "At Comfort Furnitures, we believe in eco-friendly and sustainable craftsmanship. Many of our pieces are made from responsibly sourced materials, ensuring you enjoy both quality and ethical furniture choices.",
        ],
        Features: [
          "Mobile friendly design",
          "12 Months Free Domain",
          "12 Months Free Hosting",
          "Secure Payment System",
          "Google Maps",
          "Contact form",
          "Custom design",
        ],
        Imgs: [Exam2Img2, Exam2Img1, Exam2Img3],
      },
      {
        Title: "Velvet Crown Hotel",
        Client: "TradeX",
        SubTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit",
        Description: [
          "Step into a world of refined luxury at Velvet Crown Hotel, where sophistication and comfort blend seamlessly to create an unforgettable experience. Nestled in the heart of the city, our hotel offers a sanctuary of elegance, designed for travelers who seek the finest in hospitality.",
          "Our spacious rooms and suites are thoughtfully designed with sumptuous furnishings, premium amenities, and breathtaking city views, ensuring every moment of your stay is immersed in luxury.",
          "Savor the finest flavors at our signature restaurants and rooftop lounges, where expert chefs craft culinary delights using the freshest ingredients, offering a gourmet experience like no other.",
        ],
        Features: [
          "Mobile friendly design",
          "5 Distinct Pages",
          "12 Months Free Hosting",
          "Secure Payment System",
          "Google Maps",
          "Contact form",
          "Custom design",
        ],
        Imgs: [Exam3Img1, Exam3Img2, Exam3Img3],
      },
    ],
    PackageItems: [
      {
        id: 1,
        Name: "Basic",
        Sub: "Ideal for small business or start ups. contains basic functionality and limited features",
        Price: 299,
        Features: [
          { Name: "Up to 5 Pages", isTicked: true },
          { Name: "5 design revisions", isTicked: true },
          { Name: "12 Months Free Domain", isTicked: true },
          { Name: "12 Months Free Hosting", isTicked: true },
          { Name: "Mobile friendly design", isTicked: true },
          { Name: "Social Media links", isTicked: true },
          { Name: "Contact form", isTicked: true },
          { Name: "Customer Reviews", isTicked: true },
          { Name: "Google Maps", isTicked: false },
          { Name: "Server/Database", isTicked: false },
          { Name: "Authentication System", isTicked: false },
          { Name: "Custom design", isTicked: false },
          { Name: "Payment System", isTicked: false },
          { Name: "Source Code", isTicked: false },
        ],
      },

      {
        id: 2,
        Name: "Standard",
        Sub: "Designed for growing businesses, offering expanded features and additional tools to help you scale efficiently.",
        Price: 599,
        Features: [
          { Name: "Up to 7 Pages", isTicked: true },
          { Name: "3 design revisions per page", isTicked: true },
          { Name: "12 Months Free Domain", isTicked: true },
          { Name: "12 Months Free Hosting", isTicked: true },
          { Name: "Mobile friendly design", isTicked: true },
          { Name: "Social Media links", isTicked: true },
          { Name: "Contact form", isTicked: true },
          { Name: "Customer Reviews", isTicked: true },
          { Name: "Google Maps", isTicked: true },
          { Name: "Server/Database", isTicked: true },
          { Name: "Authentication System", isTicked: true },
          { Name: "Custom design", isTicked: false },
          { Name: "Payment System", isTicked: false },
          { Name: "Source Code", isTicked: false },
        ],
      },

      {
        id: 3,
        Name: "Professional",
        Sub: "Equipped with advanced features and premium support, ideal for enterprises maximising efficiency.",
        Price: 1499,
        Features: [
          { Name: "Up to 12 Pages", isTicked: true },
          { Name: "5 design revisions per page", isTicked: true },
          { Name: "12 Months Free Domain", isTicked: true },
          { Name: "12 Months Free Hosting", isTicked: true },
          { Name: "Mobile friendly design", isTicked: true },
          { Name: "Social Media links", isTicked: true },
          { Name: "Contact form", isTicked: true },
          { Name: "Customer Reviews", isTicked: true },
          { Name: "Google Maps", isTicked: true },
          { Name: "Server/Database", isTicked: true },
          { Name: "Authentication System", isTicked: true },
          { Name: "Custom design", isTicked: true },
          { Name: "Payment System", isTicked: true },
          { Name: "Source Code", isTicked: true },
        ],
      },
    ],
    Basket: [],
    Alerts: [],
    Content: {},
    Total: 0,
  };
  const savedState = localStorage.getItem("state");
  const initial = savedState ? JSON.parse(savedState) : initialState;
  const [state, dispatch] = useReducer(ContentReducer, initial);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    alertRef.current = state.Alerts;
  }, [state]);

  const SetContent = (content) => {
    dispatch({ type: SET_CONTENT, payload: content });
  };

  const AddToBasket = (item) => {
    //Check if in basket
    const existingItem = state.Basket.find(
      (basketItem) => basketItem.Name === item.Name
    );

    if (existingItem) {
      CreateAlert({
        type: "Info",
        id: uuidv4(),
        alert: "Package already in basket",
      });
      return;
    }

    // IF NOT IN BASKET
    const itemFound = state.PackageItems.find((pkg) => pkg.Name === item.Name);
    const NewItem = {
      id: uuidv4(),
      Name: itemFound.Name,
      Price: itemFound.Price,
      Quantity: 1,
    };
    const updatedBasket = [...state.Basket, NewItem];
    CreateAlert({
      type: "success",
      id: uuidv4(),
      alert: "Package added to basket",
    });
    dispatch({ type: SET_BASKET, payload: updatedBasket });
    // Calculate total price using the updated basket
    const total = updatedBasket.reduce(
      (acc, item) => acc + item.Price * item.Quantity,
      0
    );
    // Dispatch total after updating the basket
    dispatch({ type: SET_TOTAL, payload: total });
  };

  const RemoveFromBasket = (name) => {
    dispatch({
      type: SET_BASKET,
      payload: state.Basket.filter((item) => item.Name !== name),
    });
  };

  const UpdateBasket = (item, quantity) => {
    let updatedBasket;

    // Check if the item already exists in the basket
    const existingItem = state.Basket.find(
      (basketItem) => basketItem.id === item.id
    );

    if (existingItem) {
      // If quantity is less than 1, remove the item
      if (quantity < 1) {
        updatedBasket = state.Basket.filter(
          (basketItem) => basketItem.id !== item.id
        );
      } else {
        // Otherwise, update the quantity
        updatedBasket = state.Basket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, Quantity: quantity }
            : basketItem
        );
      }
    } else {
      // If item is not in the basket, find it in PackageItems and add it
      const newItem = state.PackageItems.find((pkg) => pkg.Name === item.Name);

      if (newItem) {
        updatedBasket = [
          ...state.Basket,
          {
            id: newItem.Name,
            Name: newItem.Name,
            Price: newItem.Price,
            Quantity: quantity,
          },
        ];
      } else {
        return; // If item is not found, exit function
      }
    }

    // Dispatch updated basket state
    dispatch({ type: SET_BASKET, payload: updatedBasket });

    // Calculate total price using the updated basket
    const total = updatedBasket.reduce(
      (acc, item) => acc + item.Price * item.Quantity,
      0
    );

    // Dispatch total after updating the basket
    dispatch({ type: SET_TOTAL, payload: total });
  };

  const CreateAlert = (Alert) => {
    if (Alert.type === "success") {
      let NewAlerts = [];
      if (state.Alerts.length > 0) {
        NewAlerts = [Alert];
      } else {
        NewAlerts = [...state.Alerts, Alert];
      }
      dispatch({ type: SET_ALERTS, payload: NewAlerts });
      setTimeout(() => {
        RemoveAlert(Alert.id);
      }, 3000);
    } else {
      const index = state?.Alerts
        ? state.Alerts.findIndex(
            (item) => item.alert.trim() === Alert.alert.trim()
          )
        : -1;

      if (index < 0) {
        const NewAlerts = [...state.Alerts, Alert];
        dispatch({ type: SET_ALERTS, payload: NewAlerts });
        setTimeout(() => {
          RemoveAlert(Alert.id);
        }, 3000);
      }
    }
  };

  const RemoveAlert = (AlertId = null) => {
    if (!AlertId) {
      const newAlerts = alertRef.current.slice(1);
      dispatch({ type: SET_ALERTS, payload: newAlerts });
      return;
    }
    const index = alertRef.current.findIndex((item) => item.id === AlertId);
    if (-1 < index) {
      const NewAlerts = alertRef.current.filter((item) => item.id !== AlertId);
      dispatch({ type: SET_ALERTS, payload: NewAlerts });
    }
  };

  return (
    <ContentContext.Provider
      value={{
        Projects: state.Projects,
        Content: state.Content,
        PackageItems: state.PackageItems,
        Basket: state.Basket,
        Total: state.Total,
        Alerts: state.Alerts,
        UpdateBasket: UpdateBasket,
        SetContent: SetContent,
        CreateAlert: CreateAlert,
        RemoveAlert: RemoveAlert,
        AddToBasket: AddToBasket,
        RemoveFromBasket: RemoveFromBasket,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};
