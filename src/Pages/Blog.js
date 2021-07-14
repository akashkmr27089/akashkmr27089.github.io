import logo from '../logo.svg';
import '../App.css';
import NavBar from '../Components/NavBar/navbar';

function About() {
    return (
        <>
            {/* <Header /> */}
            <NavBar />
            <div className="App">
                <header className="App-header">
                    Blog
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div >
        </>
    );
}

export default About;
