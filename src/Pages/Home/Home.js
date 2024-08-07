import React from "react";
import home1 from "../../Assets/home1.jpg";
import home2 from "../../Assets/home2.png";
import style from "./Home.module.css";
import Card from "../Card/Card";
import card1 from "../../Assets/card1.jpg";
import card2 from "../../Assets/card2.jpg";
export default function Home() {
  return (
    <div className={style.main}>
      <div className={style.image}>
        {/* <p>THE FORMULA MEDSPA</p>
        <p>GRAND OPENING SPECIALS</p> */}
        <img
          src={home1}
          alt="home"
          style={{ width: "50%", height: "70vh", objectFit: "cover" }}
        />
        <img
          src={home2}
          alt="home"
          style={{ width: "50%", height: "70vh", objectFit: "cover" }}
        />
      </div>
      <div className={style.homeContainer}>
        <p className={style.homeText}>THE FORMULA MEDSPA</p>
        <p className={style.homeText}>GRAND OPENING SPECIALS</p>
      </div>
      <div className={style.info}>
        <p>Our grand opening celebration is coming soon.</p>
        <p>Mark your calendars for Thursday, September 21, 2023.</p>
        <p>In the meantime, book in advance to take advantage of these</p>
        <p>limited-time offers!</p>
      </div>
      <button className={style.button}>BOOK NOW</button>
      <div className="d-flex">
        <Card
          cardimg={card1}
          text={"MEMBERSHIP FORMULAS"}
          text1="Become a founding Formula member and save"
          text2="Get 1 month FREE when you sign up for any Membership"
          text3="Plus receive a gift basket of The Formula skincare products (A $250 value)"
        />
        <Card
          cardimg={card2}
          text={"A LA CARTE SERVICES"}
          text1="A la carte treatment specials"
          text2="10% off All Botox, Fillers, & PDO Threads"
          text3="20% off All Facial Formulas, Peel Formulas & Aquagold
30% off All Lasers"
        />
      </div>
    </div>
  );
}
