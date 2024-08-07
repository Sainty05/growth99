import React from "react";
import style from "./Patient.module.css";
import PatientCard from "../PatientCard/PatientCard";

export default function PatientComponent() {
  return (
    <div className={style.PatientComponent}>
      <p className={style.text1}>What patients are saying</p>
      <div className="d-flex">
        <PatientCard
          text1={"TANIA C."}
          text2={
            "Absolutely love Nicole and her staff! Everything she does looks natural, it’s never over done, and is aimed at rejuvenation and prevention. Two separate visits she swayed me away from a more expensive procedure that I was going in for, in favor of a less expensive procedure that she felt was more right for my skin. She's honest about what she feels is best for your skin."
          }
        />
        <PatientCard
          text1={"ANGELA B."}
          text2={
            "I've always had good experiences with Nicole and her staff. Everyone is patient and they answer my questions and concerns without forcing you into buying something, which is something I've experienced at other skin care businesses. My treatment results are always consistent and good. Nicole's very passionate about her business and she seems very eager to learn more about her profession and I feel secure in her hands."
          }
        />
        <PatientCard
          text1={"JOANNE R."}
          text2={
            "Nicole is extremely professional and honest. Her technical skills are superior. The atmosphere is friendly and aesthetically pleasing. I appreciate Nicole's commitment in delivering great care. She listens to me and takes time to make sure I don't overdo treatments. Highly recommend her!"
          }
        />
      </div>
    </div>
  );
}
