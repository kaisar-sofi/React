import React from 'react'
import "./about.css"
import logo from './Navbar/assets/kaisar.jpeg';
import {BsCloudDownload} from "react-icons/bs"
import aboutdata from './aboutdata';
import Card from '../../components/Card';
const About = () => {
  return (
   <>
    <section id='about' data-aos="fade-in">
        <div className="container about_container">

        {/* left-side-container */}
              <div className="about__left">

                <div className='about_portrait'>
                    <img src={logo} alt="kaisar" width=""/>
                </div> 
              </div>
           

            {/* right-side-container */}
            <div className="about_right">
              <h2>About Me</h2>

              <div className="about_cards">
                {
                  aboutdata.map(item=>(
                    <Card key={item.id} className="about_card">
                      <span className='about_card-icon'>
                        {item.icon}
                      </span>
                      <h5>{item.title}</h5>
                      <small>{item.desc}</small>
                    </Card>
                  ))
                }
              </div>


               <p>
                 I am kaisar sofi graduated with a degree in Cs.Along with My
                  degree I am Focused front end developer who is passionate about creating beautifull,user-freindly 
                  and fucntional web applications and websites.I have completed a number of projects that have given me hands-on experience
                   with front-end technologies such as Html5,Css3,Javascript,Tailwind and front end framework such as React.I am skilled at building fast
                    and responsive User interfaces.

               </p>
               <p> 
                  I am a quick learner who is always eager to expand my knowledge and skills.I am also a team player and eager to bring my skills and experience to a team that values collaboration and innovation.
                  I would offer my full commitment and can bring value to the organisation and excited about the opportunities that lie ahead in the field of front-end development.I am open to full time opportunity to expand my skills in the industry. 
               </p>

               <a href="#cv" download className='btn primary'> Download Cv <BsCloudDownload/></a>
            </div>
        </div>
    </section>
   </>
  )
}

export default About
