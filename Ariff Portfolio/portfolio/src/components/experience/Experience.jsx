import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>CSS</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>JavaScript</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>Bootstrap</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>React</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>Vue</h4>
            </article>
        </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>Node JS</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>MongoDB</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>PHP</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>MySQL</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>Python</h4>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>Java</h4>
            </article>
        </div>  

        </div>
      </div>

    </section>
  )
}

export default Experience