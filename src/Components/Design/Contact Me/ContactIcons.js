import './ContactIcons.css';
import { useEffect } from 'react';

const ContactIcon = () => {
    // var PhotoWidth = document.querySelector("#MyPhoto").width;
    useEffect(() => {
        // This function is executed after loading the page 
        var PhotoWidth = document.querySelector("#MyPhoto").width + 10;
        document.querySelector("#ContactLinks").setAttribute("style", "width:" + PhotoWidth + "px");
    });
    return (
        <>
            <div className="row" id="ContactLinks">
                <a href="https://github.com/akashkmr27089" target="_blank"><i class="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/aakash-kumar-9a2287170/" target="_blank"><i class="fab fa-linkedin"></i></a>

            </div>
        </>
    );
}

export default ContactIcon;