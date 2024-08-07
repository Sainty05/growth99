import React from "react";
import style from "./OwnerMessage.module.css";
import ownerPic from "../../Assets/owner.png";

export default function OwnerMessage() {
  return (
    <div className={style.OwnerMessageCompo}>
      <img src={ownerPic} alt="home" style={{ width: "350px" }} />
      <div>
        <p className={style.txt1}>The Formula MedSpa By Nicole Frontera, FNP</p>
        <p>
          “A modern approach to beauty and wellness, that combines treatments,
          procedures, and products that deliver subtle yet transformative
          results.
        </p>
        <p>
          Self-care is not an indulgence, it's a necessity. The better you feel,
          the more positive energy you can give to your life. My goal is to make
          everyone feel like the best version of themselves... inside and out.”
        </p>
        <p>- Nicole Frontera, Owner and Master Injector</p>
      </div>
    </div>
  );
}
