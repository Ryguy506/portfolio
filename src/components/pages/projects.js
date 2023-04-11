import React from 'react';
import Slideshow from '../slide';

const myProjects = [
  {
    title: 'Project Tracker',
    description: 'Project Tracker is a site where users can connect there Github account and create posts to find collobrators for there projects. This was built using JavaScript, HTML, CSS, Node.js, Express, Github Oauth, Github API, MySQL, Sequelize, and Handlebars. ',
    image: 'https://user-images.githubusercontent.com/83068010/220494493-ae91b024-79a0-4d9d-a442-23885ffed739.png',
    repoLink: 'https://github.com/Ryguy506/NB-Project-Tracker',
    liveLink: 'https://nb-dev-tracker.herokuapp.com/'
  },

  {
    title: 'NewsFindr',
    description: 'NewsFindr is a news aggregator that allows users to search for news articles and save them. This was built using JavaScript, jQuery, HTML, CSS and News APIs to fetch news articles. ',
    image: 'https://github.com/Ryguy506/NewsFindr/raw/main/Assets/Screenshot1.png',
    repoLink: 'https://github.com/Ryguy506/NewsFindr',
    liveLink: 'https://omalleyjg.github.io/NewsFindr/'
  },

  {
    title: 'Weather Dashboard',
    description: 'This project allows users to search for a city and view the current weather and a 5 day forecast. This was built using HTML, CSS, and JavaScript and uses the OpenWeather API to fetch weather data.',
    image: 'https://github.com/Ryguy506/weather-search/raw/main/assets/Screenshot1.png',
    repoLink: 'https://github.com/Ryguy506/weather-search',
    liveLink: 'https://ryguy506.github.io/weather-search/'
  },
  {
    title: 'Work-Day-Planner',

    description: 'This project is a simple work day planner, the current hour will change the 9 to 5 time blocks color accordingly. This was built using JavaScript, jQuery, HTML, CSS and uses the Day.js API.',
    image: 'https://github.com/Ryguy506/Work-Day-Planner/raw/main/assets/screenshot2.png',
    repoLink: 'https://github.com/Ryguy506/Work-Day-Planner',
    liveLink: 'https://ryguy506.github.io/Work-Day-Planner/'
  },
  {
    title: 'Password Generator',
    description: 'This project uses user input to generate a random unique password from the users specified choices. This was built using HTML, CSS, and JavaScript.',
    image: 'https://github.com/Ryguy506/password-generator/raw/main/assets/screenshot1.png',
    repoLink: 'https://github.com/Ryguy506/password-generator',
    liveLink: 'https://ryguy506.github.io/password-generator/'
  },
  {
    title: 'PWA-Text-Editor',
    description: 'This is a simple text editor app that is used to create code snippets or notes that are automatically saved and accessible for viewing or editing whether your connected to the internet or not.',
    image: 'https://github.com/Ryguy506/PWA-Text-Editor/raw/main/assets/demoimg.png',
    repoLink: 'https://github.com/Ryguy506/PWA-Text-Editor',
    liveLink: 'https://pwa-jate0.herokuapp.com/'
  },



]


export default function Projects() {
  return (
<div className='container p-0'>
    <div id='projects' className='p-5 rounded'>
      
     <Slideshow projects={myProjects} />
    
            </div>
        </div>
  );
}