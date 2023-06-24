import React from 'react'
import "./skill.css"
import {AiOutlineHtml5,AiFillGithub} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {TbBrandJavascript} from "react-icons/tb"
import {SiTailwindcss} from "react-icons/si"
import {FaReact} from "react-icons/fa"
const Skill = () => {
  return (
    <section id='skills' data-aos="fade-up">
    <h2 data-aos="fade-right">My Skills</h2>
    <p data-aos="fade-right">i give you the best in all the Skills below.</p>
        <div className="container skill_container" data-aos="fade-right">

           <h3 className='heading'>Front end development</h3>
           <div className='skill_icon' >
                <AiOutlineHtml5 className='icon'/>
                <DiCss3 className='icon'/>
                <TbBrandJavascript className='icon'/>
                <SiTailwindcss className='icon'/>
                <FaReact className='icon'/>
                <AiFillGithub className='icon'/>
           </div>
        </div>
    </section>
  )
}

export default Skill
