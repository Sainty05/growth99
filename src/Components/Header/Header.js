import React from "react";
import logo from "../../Assets/logo.png";
import style from "./Header.module.css";
export default function Header() {
  return (
    <div className="d-flex justify-content-between pt-4">
      <img src={logo} alt="logo" style={{ maxHeight: "80px" }} />
      <div className={style.rightSection}>
        <button className={style.button}>BOOK NOW</button>
        <div className={style.address}>
          <p className={style.bussinessName}>The Formula Medspa</p>
          <p className={style.businessAddress}>
            77 Purchase St., 2nd Floor, Rye, NY 10580
          </p>
          <p className={style.businessAddress}>
            <a href="tel:914-305-2424" id="iq2o2j">
              914-305-2424{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
