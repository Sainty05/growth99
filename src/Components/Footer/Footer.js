import React from "react";
import style from "./Footer.module.css";
import logo from "../../Assets/g99.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons/faInstagramSquare";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={style.FooterComp}>
      <hr className={style.hr} />
      <div className="d-flex justify-content-between">
        <div className={style.txt}>
          © 2023 The Formula Medspa | All Rights Reserved.
        </div>
        <div className={style.txt}>
          Site Developed And Maintained By:
          <span>
            <img
              src={logo}
              alt="logo"
              style={{ width: "150px", marginLeft: "20px" }}
            />
          </span>
        </div>
      </div>
      <div className={style.FooterCard}>
        <div className={style.txt1}>Have questions?</div>
        <div className={style.txt2}>Call or email our team</div>
        <div className={style.txt2}>
          914-305-2424 | info@theformulamedspa.com
        </div>
        <div className={style.social}>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTiktok} />
        </div>
      </div>
    </div>
  );
}
