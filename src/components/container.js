import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Nav from './nav';
import Resume from './pages/resume';
import React, { useState } from 'react';



export default function Container() {

    const [page, setPage] = useState('about')

    const render = () => {


        if (page === 'about') {
            return <Home />
        }
        else if (page === 'projects') {
            return <Projects />
        }
        else if (page === 'contact') {
            return <Contact />
        }
        else {
            return <Resume />
        }

        
    }





    return (
        <div className=''>
            <Nav currentPage={page} changePage={setPage} />

          {render()}
    
        </div>

    )

}



