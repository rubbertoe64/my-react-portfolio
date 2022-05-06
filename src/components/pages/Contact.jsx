import React from "react";

function Contact () {
    return ( 
        <div>
            <section>
                <h1>Contact Me (doesnt save info ...yet!)</h1>
            </section>
            <section>
               <h3>Name: <input type="text"></input></h3>
            </section>
            <section>
            <h3>Email: <input type="text" className="email-textbox"></input></h3>
            </section>
            <section>
            <h3>Message: </h3><textarea rows="2" cols="25"  className="message-textbox"></textarea>
            </section>
        </div>
     );
}
 
export default Contact;