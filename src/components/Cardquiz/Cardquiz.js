import React , { useEffect } from 'react'
import classes from './Cardquiz.module.css'
import stem1 from '../../assets/images/stem1.png'
import stem2 from '../../assets/images/stem2.png'
import stem3 from '../../assets/images/stem3.png'
import Card from '../Card/Card'
import { getQuizList } from '../../parse/contestant'

const Cardquiz = () => {
    const ageGroup = JSON.parse(sessionStorage.getItem("gqUser"))
    const gettingQuiz = async () => {

      const getQuiz = await getQuizList(ageGroup?.age_group);
      console.log(getQuiz, "getQuizList")
      // gettingQuiz()
    }
  // console.log(ageGroup.age_group)
    useEffect(() => {
      gettingQuiz()
    }, [])
    return (
        <>

            <div className={classes.cardquizMain} >
                <div className={classes.cardquiz}>
                    <h1 style={{color: "var(--teal)"}}>Your Quizzes</h1>
                    <h3>Complete the <span className={classes.science}>Science</span>, <span className={classes.technology}>Technology</span> and <span className={classes.mathematics}>Mathematics</span> quiz to win great prizes!</h3>
                </div>



            </div>
            <div className={classes.gamecard}>
                <div className={classes.car}>
                    {/* <img src={stem1} className={classes.Imgcard} alt="steamfest" /> */}
                    <Card imgSrc={stem1} quizTitle={"Science Quiz"} />

                </div>
                <div className={classes.car}>
                    {/* <img src={stem2} className={classes.Imgcard} alt="steamfest" /> */}
                    <Card imgSrc={stem2} quizTitle={"Mathematics Quiz"} />

                    
                </div>
                <div className={classes.car}>
                    <Card imgSrc={stem3} quizTitle={"Technology Quiz"} />
                </div>

            </div>
        </>
    )
}

export default Cardquiz