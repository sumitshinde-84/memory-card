import { useState,useEffect } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import "./App.css"
const App = () =>{
  return(
    <div className="main">
      <Header/>
      <Footer/>
    </div>
  )
}

export default App