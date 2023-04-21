import { useState,useEffect } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import "./App.css"
import Container from "./component/container";
import Loader from "./component/loader";
const App = () =>{

  useEffect(()=>{
    setTimeout(()=>{
      document.querySelector('section').style.display="none"
    },5000)

  },[])


  return(
    <div className="main">
      <Loader/>
      <Header/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App