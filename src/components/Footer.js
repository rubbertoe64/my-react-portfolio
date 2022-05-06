import React from 'react';
import '../styles.css';
import githubIcon from "./images/GitHub-Mark-64px.png"

function Footer(){
    return(
        <div className='footer'>
            <div className='footer-flex'>
                <h3 className='footer-text'>Email: <a href="mailto:rgonzelz7359@gmail.com">rgonzelz7359@gmail.com</a></h3>
                <h3> Number:(760)897-6104</h3>
                <img src={githubIcon} alt="github icon" className="footer-github" onClick={sendGithub}></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' alt='linkdin logo' className='footer-linkdin'></img>
            </div>
        </div>
    )
    
}
function sendGithub(){window.open("https://github.com/rubbertoe64", "_blank")}

export default Footer;