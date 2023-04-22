import { useEffect, useState } from "react";
import ScoreBanner from "./sub-components/scoreBanner";
import "./styles/scoreboard.css"
const ScoreBoard = ({status,imgCollection}) => {
    const [score,setScore] = useState(0)
    const [bestScore,setBestScore] = useState(0)

    useEffect(()=>{
        if(status==false){

            setScore((prevscore)=>prevscore+1)
        }else{
            setScore(0)
        }
    },[imgCollection])
    

  return <div className="scoreboard">
    <ScoreBanner name="Current Score" score={score}/>
    <ScoreBanner name="Best Score" score={bestScore}/>
  </div>;
};

export default ScoreBoard;
