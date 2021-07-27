import '../App.css';
import './css/About.css';
import myphotos from './images/myPhotos.jpg';
import AcordianGrid from '../Components/Design/InformationBox/AcordianGrid'
import { React } from 'react';
import ContactIcon from '../Components/Design/Contact Me/ContactIcons';

function About() {
    document.querySelector("body").style.backgroundColor = "white";

    //Data Content
    const StudiesContent = "<h1>Nit Goa</h1><br/><span>CGPA 7.68</span>";
    const ExperienceContent = "<h3> Research Intern at IIT Goa </h3>";


    return (
        <>
            <div className="container">
                <div className="row" id="DataSection">
                    <div className="col" id="ProfileImages">
                        <div className="row">
                            <img src={myphotos} alt="actual Photos" id="MyPhoto" />
                        </div>
                        <ContactIcon />
                    </div>
                    <div className="col" id="ProfileDetails">
                        <h1>I am ...</h1>
                        <div className="row" className="AboutMyself">
                            <span id="Introduction">You may find me researching perhaps the most wired idea known to mankind.
                                I always consider myself as a learner and in my free time, I would spend hours learning new things.
                                <br /> <br />
                                The most exciting project which I have worked on is in NMA, my answer would be the Human Brain Project, where we were trying to recreate the image which you might be thinking of from your FMRI (Blood flow across brain) signal data.
                                I love to optimize our daily real-life problems algorithmically. </span>
                            <span id="Educated"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
