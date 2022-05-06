import React from "react";
import "./cards.css"
import githubIcon from "../images/GitHub-Mark-64px.png"
import githubIconLight from "../images/GitHub-Mark-Light-64px.png"



function Cards() {
    return (
        <div className="card-container ">
            <div className="css-card" id="first-project">
                <h3 className="card-header">Note Taker</h3>
                <p>This is my note-taker app! It should be able to create new notes as wel as view older notes or delete them if you want.</p>
                <img src={githubIcon} alt="Github Icon" className="github-icon" id="githubIcon1" onClick={githubIcon1}/>
                <img src="https://icon-library.com/images/world-icon-png/world-icon-png-4.jpg" alt="World Icon" className="world-icon" id="worldIcon1" onClick={worldIcon1}/>
            </div>
            <div className="css-card" id="second-project">
                <h3 className="card-header">Restroom Finder</h3>
                <p>Website to help users find a nearby restroom!</p>
                <img src={githubIcon} alt="Github Icon" className="github-icon" id="githubIcon2" onClick={githubIcon2}/>
                <img src="https://icon-library.com/images/world-icon-png/world-icon-png-4.jpg" alt="World Icon" className="world-icon" id="worldIcon2" onClick={worldIcon2}/>

            </div>
            <div className="css-card" id="third-project">
                <h3 className="card-header">Weather Page</h3>
                <p>Look at your city's weather!</p>
                <img src={githubIcon} alt="Github Icon" className="github-icon" id="githubIcon3" onClick={githubIcon3}/>
                <img src="https://icon-library.com/images/world-icon-png/world-icon-png-4.jpg" alt="World Icon" className="world-icon" id="worldIcon3" onClick={worldIcon3}/>
            </div>
            <div className="css-card" id="fourth-project">
                <h3 className="card-header">Work Day Scheduler</h3>
                <p>This is my work day calendar! Keep track of your own events by typing in the text box and saving it! The colors display if the event is in the past with grey, present with red, and future with green.</p>
                <img src={githubIcon} alt="Github Icon" className="github-icon" id="githubIcon4" onClick={githubIcon4}/>
                <img src="https://icon-library.com/images/world-icon-png/world-icon-png-4.jpg" alt="World Icon" className="world-icon" id="worldIcon4" onClick={worldIcon4}/>
            </div>
            <div className="css-card" id="fifth-project">
                <h3 className="card-header">Employee Tracker</h3>
                <p>Track your Employees with this Nodejs app!</p>
                <img src={githubIconLight} alt="Github Icon" className="github-icon" id="githubIcon5" onClick={githubIcon5}/>
                
            </div>
            <div className="css-card" id="sixth-project">
                <h3 className="card-header">Ecommerce-Backend</h3>
                <p>Connect to a database using Sequelize and use commands!</p>
                <img src={githubIconLight} alt="Github Icon" className="github-icon" id="githubIcon6" onClick={githubIcon6}/>
                
            </div>
        </div>
    )
    
};




// 1
function githubIcon1 () {window.open("https://github.com/rubbertoe64/note-taker", "_blank") ;}

function worldIcon1 () {window.open("https://note-taker-api-online.herokuapp.com/", "_blank") ;}

// 2
function githubIcon2 () {window.open("https://github.com/Will-Pikus/Restroom-Finder", "_blank") ;}
    


function worldIcon2 () {window.open("https://will-pikus.github.io/Restroom-Finder/", "_blank") ;}


function githubIcon3 () {window.open("https://github.com/rubbertoe64/weather-page", "_blank") ;}
    


function worldIcon3 () {window.open("https://rubbertoe64.github.io/weather-page/", "_blank") ;}


function githubIcon4 () {window.open("https://github.com/rubbertoe64/work-calendar", "_blank") ;}
    


function worldIcon4 () {window.open("https://rubbertoe64.github.io/work-calendar/", "_blank") ;}


function githubIcon5 () {window.open("https://github.com/rubbertoe64/employee-tracker", "_blank") ;}
    



function githubIcon6 () {window.open("https://github.com/rubbertoe64/e-commerce-backend", "_blank") ;}
    


export default Cards;