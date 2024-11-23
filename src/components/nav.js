import React, { useState } from 'react';



const Nav = ({currentPage , changePage}) => {



    return (
        <nav className='nav navbar fixed-top'>
            <div>
                
                <a  className={currentPage === 'about' ? 'activelink' : 'links'} onClick={() => changePage('about')}>about</a>
           
                <a  className={currentPage === 'projects' ? 'activelink' : 'links' } onClick={() => changePage('projects')}>projects</a>

                <a  className={currentPage === 'resume' ? 'activelink' : 'links'} onClick={() => changePage('resume')}>Skills & Education</a>
              
        

                

                </div>
        </nav>

    )
}


export default Nav;