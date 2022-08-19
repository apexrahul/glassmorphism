import React from "react"
import './App.css'
import About from "./About"
import Content from "./Content"

export function App(){
   return (
  <>
      <div className="video-bg">
        <video width="320" height="240" autoPlay loop muted>
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
         Your browser does not support the video tag.
       </video>
   </div>
   <div id="container">
   <div className="about-container">
      <About />
   </div>
   <div className="content-container">
    <Content />
   </div>
 </div>  
 </>  
   )  
}

