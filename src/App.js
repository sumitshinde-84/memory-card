import { useState,useEffect } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import "./App.css"
import Container from "./component/container";
const App = () =>{
  return(
    <div className="main">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App