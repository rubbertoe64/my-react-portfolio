import React from "react";
import myPdf from "./ResumewithProjects.pdf";

function Resume () {
    return (
        <div className="download">
            <a href="./Resume with Projects" download="Roberto's Resume" >Download my Resume here or use the pdf viewer!</a>
            <div>
            <iframe title="My Resume" src={myPdf} width="100%" height="800px"/>
            </div>
        </div>
        
    )
}

export default Resume;