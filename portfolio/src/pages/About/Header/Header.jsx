import React, { useEffect } from 'react'
import "./header.css"
import logo from './../Navbar/assets/kaisar.jpeg';
import data_icons from './../../../data_icons';
import AOS from "aos"
import "aos/dist/aos.css"

const Header = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  })


  return (
   <>
    <header id='header'>
        <div className="container header_container">

         {/* hero-section-images */}
           <div className="header_profile" data-aos="fade-in">
            <img src={logo} alt="kaisar" width="200px" />
          </div>
            <h3 data-aos="fade-up">Kaisar Sofi</h3>

            <p data-aos="fade-up" className='para'>
                A Self-motivated,Skilled front end developer with a passion of creating innovative,beautiful,user-freindly and functional web application and websites.
                I am collabrator,who enjoys working with teams to 
                deliver high quality solutions.
            </p>

            {/* hero-section-buttons */}
            <div className="header_cta" data-aos="fade-up">
              <a href="#contact" className='btn primary'>Let's Talk</a>
              <a href="#portfolio" className='btn white'>My Work</a>
            </div>

            {/* hero-section-icons */}
            <div className="header_socials">
              {
                  data_icons.map(item=><a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>
                      {item.icon}
                  </a>)
              }
            </div>
           
        </div>
    </header>
   </>
  )
}

export default Header
