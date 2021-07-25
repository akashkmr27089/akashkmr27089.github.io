import '../App.css';
import './css/About.css';
import AcordianGrid from '../Components/Design/InformationBox/AcordianGrid'

function About() {
    document.querySelector("body").style.backgroundColor = "white";
    return (
        <>
            <div className="container">
                <div className="row" id="DataSection">
                    <div className="col">

                    </div>
                    <div className="col">
                        <AcordianGrid Heading={"Studies"} Content={"Content"} id={1} />
                        <AcordianGrid Heading={"Companies"} Content={"Content"} id={2} />
                        <AcordianGrid Heading={"Hobby Project"} Content={"Content"} id={3} />
                        <AcordianGrid Heading={"Ongoing Project"} Content={"Content"} id={4} />

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
