import { useState,useEffect } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import "./App.css"
import Container from "./component/container";
import Loader from "./component/loader";
import ScoreBoard from "./component/scoreBoard";
const App = () =>{
  const [status,setStatus] = useState(null)
  const [imgCollection,setImgCollection]  = useState([])
  useEffect(()=>{
    setTimeout(()=>{
      document.querySelector('section').style.display="none"
    },5000)

  },[])

  const StatusManager= (statusRight,imgCollection)=>{
    
    setStatus(statusRight)
    setImgCollection(imgCollection)
    console.log(status)
  }


  return(
    <div className="main">
      <Loader/>
      <Header/>
      <ScoreBoard status={status} imgCollection={imgCollection}/>
      <Container StatusManager={StatusManager}/>
      <Footer/>
    </div>
  )
}

export default App