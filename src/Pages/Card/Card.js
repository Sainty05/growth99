import React, { useEffect } from "react";
import style from "./Card.module.css";

export default function Card({ cardimg, text, text1, text2, text3 }) {
  const buttonData =
    text === "MEMBERSHIP FORMULAS"
      ? [
          { id: 1, label: "Membership Formula 1" },
          { id: 2, label: "Membership Formula 2" },
          { id: 3, label: "Membership Formula 3" },
          { id: 3, label: "Membership Formula 4" },
        ]
      : [
          { id: 1, label: "Facial Formulas" },
          { id: 2, label: "Peel Formulas" },
          { id: 3, label: "Laser Formulas" },
          { id: 3, label: "Thread Lift" },
          { id: 3, label: "Neurotoxins" },
          { id: 3, label: "Dermal Fillers" },
          { id: 3, label: "Aquagold" },
        ];
  return (
    <div className={style.cardComponent}>
      <img
        src={cardimg}
        alt="card"
        style={{
          width: "95%",
          height: "500px",
          margin: "15px",
          objectFit: "cover",
        }}
      />
      <p className={style.text}>{text}</p>
      <div className={style.cardComponent2}>
        <p className={style.text1}>{text1}</p>
        <p className={style.text2}>{text2}</p>
        <div className={style.text2}>{text3}</div>
      </div>
      <div className={style.cardComponent3}>
        {buttonData.map((button) => (
          <button className={style.btncss} key={button.id}>
            <span>{button.label}</span>
            <span>+</span>
          </button>
        ))}
        <button className={style.button}>BOOK NOW</button>
      </div>
    </div>
  );
}
