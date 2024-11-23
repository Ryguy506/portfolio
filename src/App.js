import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Nav from './components/nav';
import Resume from './components/pages/resume';
import React, { useState } from 'react';


const App = () => {


    const [page, setPage] = useState('about')


    return (
        <div className=''>
            <Nav currentPage={page} changePage={setPage} />
            {page === 'about' && <Home />}
            {page === 'projects' && <Projects />}
            {page === 'resume' && <Resume />}
        </div>

    )

 }


export default App;