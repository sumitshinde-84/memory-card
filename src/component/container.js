import "./styles/container.css";
import { useState } from "react";
import "./sub-components/card";
import Card from "./sub-components/card";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img9 from "../images/9.png";
import img10 from "../images/10.png";
import img11 from "../images/11.png";
import img12 from "../images/12.png";


const Container = () => {
  const [imgCollection, setImgCollection] = useState([
    { id: 1, img: img1, name: "Caterpie" },
    { id: 2, img: img2, name: "Caterpie" },
    { id: 3, img: img3, name: "Caterpie" },
    { id: 4, img: img4, name: "Caterpie" },
    { id: 5, img: img5, name: "Caterpie" },
    { id: 6, img: img6, name: "Caterpie" },
    { id: 7, img: img7, name: "Caterpie" },
    { id: 8, img: img8, name: "Caterpie" },
    { id: 9, img: img9, name: "Caterpie" },
    { id: 10, img: img10, name: "Caterpie" },
    { id: 11, img: img11, name: "Caterpie" },
    { id: 12, img: img12, name: "Caterpie" },
  ]);


  return (
    <div className="container">
    {imgCollection.map((imgObj) => (
  <Card image={imgObj.img} name={imgObj.name} />
))}
    </div>
  );
};

export default Container;
