import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';

function Slideshow({projects}) {
  const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//         setCurrentSlide(currentSlide === projects.length - 1 ? 0 : currentSlide + 1);
//     }, 10000);
//     return () => clearInterval(interval);
// })


  function handleClick(e) {
    const direction = e.target.id;
    if (direction === 'left') {
      setCurrentSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1);
      
    } 
    if (direction === 'right') {
      setCurrentSlide(currentSlide === projects.length - 1 ? 0 : currentSlide + 1);
    }
  }

  
    return (
        <div className='row'>
          <div className='col-12'>
         
         <div className="card">
                <a href={projects[currentSlide].liveLink} target="_blank">
                <img src={projects[currentSlide].image} className="card-img-top img-fluid" alt="..." />
                </a>
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{color: '#05d1fc' }}>{projects[currentSlide].title}</h5>
                  <div className='desc'>
                  <p className="card-text">{projects[currentSlide].description}</p>
                  </div>
                  <a href={projects[currentSlide].repoLink} target="_blank"><FaGithub size={50} color="#333" className='repoLink' /></a>

                </div>
                <div className='d-flex justify-content-between'>
              <AiOutlineArrowLeft size={70} className='btn' id='left' onClick={handleClick}/>
              
              <AiOutlineArrowRight size={70} className='btn' id='right' onClick={handleClick}/>
              </div>
              </div>
          
            </div>
            </div>

   
                )
    
}

                
            









export default Slideshow;