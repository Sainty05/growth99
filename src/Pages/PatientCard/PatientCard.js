import React from "react";
import style from "../PatientComponent/Patient.module.css";
import google from '../../Assets/google.svg'

export default function PatientCard({ text1, text2 }) {
  return (
    <div className={style.PatientCard}>
      <p className={style.txt1}>{text1}</p>
      <div>
        <svg
          focusable="false"
          height="18"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
          viewBox="0 0 18 17"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
          class="_star_1eskt_116"
        >
          <path d="m9 .7 1.8 5.9H17l-5 3.6 2 6-5-3.7L4 16l1.8-5.9-5-3.6H7L9 .7Z"></path>
        </svg>
        <svg
          focusable="false"
          height="18"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
          viewBox="0 0 18 17"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
          class="_star_1eskt_116"
        >
          <path d="m9 .7 1.8 5.9H17l-5 3.6 2 6-5-3.7L4 16l1.8-5.9-5-3.6H7L9 .7Z"></path>
        </svg>
        <svg
          focusable="false"
          height="18"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
          viewBox="0 0 18 17"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
          class="_star_1eskt_116"
        >
          <path d="m9 .7 1.8 5.9H17l-5 3.6 2 6-5-3.7L4 16l1.8-5.9-5-3.6H7L9 .7Z"></path>
        </svg>
        <svg
          focusable="false"
          height="18"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
          viewBox="0 0 18 17"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
          class="_star_1eskt_116"
        >
          <path d="m9 .7 1.8 5.9H17l-5 3.6 2 6-5-3.7L4 16l1.8-5.9-5-3.6H7L9 .7Z"></path>
        </svg>
        <svg
          focusable="false"
          height="18"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
          viewBox="0 0 18 17"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
          class="_star_1eskt_116"
        >
          <path d="m9 .7 1.8 5.9H17l-5 3.6 2 6-5-3.7L4 16l1.8-5.9-5-3.6H7L9 .7Z"></path>
        </svg>
      </div>
      <p className="fs-6">{text2}</p>
      <img
        src={google}
        alt="google"
        //   style={{ width: "50%", height: "70vh", objectFit: "cover" }}
      />
    </div>
  );
}
