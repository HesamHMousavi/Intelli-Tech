import { createContext, useReducer, useEffect } from "react";
import ContentReducer from "./ContentReducer";
import { SET_CONTENT } from "../TYPES";

import Exam1Img1 from "../../Images/Project1/img1.png";
import Exam1Img2 from "../../Images/Project1/img2.png";
import Exam1Img3 from "../../Images/Project1/img3.png";

import Exam2Img1 from "../../Images/Project2/img1.png";
import Exam2Img2 from "../../Images/Project2/img2.png";
import Exam2Img3 from "../../Images/Project2/img3.png";

import Exam3Img1 from "../../Images/Project3/img1.png";
import Exam3Img2 from "../../Images/Project3/img2.png";
import Exam3Img3 from "../../Images/Project3/img3.png";

export const ContentContext = createContext();

export const ContextState = (props) => {
  // const nav = useNavigate();
  const initialState = {
    Projects: [
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
    Content: {},
  };
  const savedState = localStorage.getItem("state");
  const initial = savedState ? JSON.parse(savedState) : initialState;

  const [state, dispatch] = useReducer(ContentReducer, initial);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const SetContent = (content) => {
    dispatch({ type: SET_CONTENT, payload: content });
  };

  return (
    <ContentContext.Provider
      value={{
        Projects: state.Projects,
        Content: state.Content,
        SetContent: SetContent,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};
