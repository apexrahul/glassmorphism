import React, {useState} from 'react'
import './Content.css'
import { IoMdNotifications } from 'react-icons/io'
import { AiFillCloud } from 'react-icons/ai'
import image1 from '../assets/adobe-pr.png'
import image2 from '../assets/photoshop.png'
import image3 from '../assets/illustrator.png'
import image4 from '../assets/after-effect.png'


const Content = () => {
  const [click, setClick] = useState("content-header")
  const [isOpen, setIsOpen] = useState("false");

function handleClick(e){
  if(e.target.className === "nosubmit"){
    setClick("display-submit");
    setIsOpen("true");
  } else{
    setIsOpen("false")
  }
}


  return (
    <>
      <div className={click}>
          <p className="active-sub-header">Apps</p>
          <p>Discover</p>
          <p className="hide-para">Your Work</p>
          <p className="hide-para">Market</p>
          <input onClick={handleClick} className={isOpen ? 'nosubmit' : "" } type="search" placeholder="Search..." />
          <IoMdNotifications className="icon" />
          <AiFillCloud className="icon" />
      </div>
      <div className="sub-header">
          <p className="active-sub-header">Desktop</p>
          <p>Mobile</p>
          <p>Web</p>
      </div>
      <div className="footer">
        <div className='adobe-img'>
          <div className="adobe-content">
             <div className="heading-adobe">
                <img src={image1} alt='pr' />
                <h2>Adobe Stock</h2>
             </div> 
             <p>Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan.</p>
             <button>Start free trail</button>
          </div>
            <div className="man-img">
               <img src="https://assets.codepen.io/3364143/glass.png" alt="man-img" />
           </div>
        </div>
        <p><span>Installed</span></p>
        <div className="apps-container">
           <div className="apps-item">
           <div className="app-name">
           <img src={image2} alt='photoshop-img' />
            <p>Photoshop</p>
           </div>
           <div className="update">
            <p>Updated</p>
           </div>
            <button>Open</button>
           </div>
           <div className="apps-item">
           <div className="app-name">
           <img src={image3} alt='photoshop-img' />
            <p>Illustrator</p>
           </div>
           <div className="update">
            <p>Updated</p>
           </div>
            <button>Open</button>
           </div>
           <div className="apps-item">
           <div className="app-name">
           <img src={image4} alt='photoshop-img' />
            <p>After Effects</p>
           </div>
           <div className="update">
            <p>Updated</p>
           </div>
            <button>Open</button>
           </div>
        </div>
        <p><span>Apps in your plan</span></p>
        <div className="apps-updates">
          <div className="about-apps">
            <h4>Premiere Pro</h4>
            <p>Edit, master and create fully professional videos</p>
            <button>Update</button>
          </div>
          <div className="about-apps">
            <h4>InDesign</h4>
            <p>Design and publish great projects and mockups</p>
            <button>Update</button>
          </div>
          <div className="about-apps">
            <h4>After Effects</h4>
            <p>Industry Standard motion graphics and visual effects</p>
            <button>Update</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content