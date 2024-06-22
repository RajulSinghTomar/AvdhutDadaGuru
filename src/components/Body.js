import React from 'react'
import Home from './Home';
import SocialLinks from "./SocialLinks";
import AboutUs from "./AboutUs";
import  {Mission}  from "./Mission";
import Achievement from "./Achievement"
import ContactUs from './ContactUs';
const Body = () => {
  return (
    <div>
        {/* <div className="absolute w-full h-full bg-cover bg-fixed"> 
                <img src={imgSrc}
                    alt="background" />
        </div> */}
        <div>
        <Home />
        <AboutUs />
        <Mission />
        <Achievement />
        <SocialLinks/>
        <ContactUs />
        </div>
        
    </div>
  )
}

export default Body