import "./styles/scoreBanner.css"

const ScoreBanner = ({score,name}) =>{
    return(
        <div className="scoreBanner" >{ name +" "+score}</div>
    )
}

export default ScoreBanner;
