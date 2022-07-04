import React, { useEffect } from "react";
import "./Card.css";
import { getQuizList } from '../../parse/contestant'
const Card = ({ index, assessmentTitle, status, imgSrc, quizTitle, imgAlt }) => {
  // const ageGroup = JSON.parse(sessionStorage.getItem("gqUser"))

  // const gettingQuiz = async () => {

  //   const getQuiz = await getQuizList(ageGroup?.age_group);
  //   console.log(getQuiz, "getQuizList")
  // }
  // useEffect(() => {
  //   gettingQuiz()
  // }, [])
  const cardcolor = "active"
  const gamecolor = "science"
  return (
    <div className={"card-inner-block"}>
      {/* <div className="card-container">

      </div> */}
      <div className="card-container ">
        <img src={imgSrc} alt={imgAlt} className="w-100" height="200" />
        <span className="spancard">7 questions</span>
      </div>
      {/* <hr /> */}
      <div className="gameTitle w-100">

    
      <div className="cardbottom ">
        <div className={`circleBase ${cardcolor}`}>
          <span className="ActiveP">Not Active</span>
        </div>

      </div>
        <div style={{padding: "30px 0"}} >
          <h5 className={`Activ ${gamecolor}`}>{quizTitle}</h5>
        </div>
        </div>

        <div className="timerdivtop">

       <div className="timerdiv">

       </div>
</div>

    </div>
  );
};

export default Card;
