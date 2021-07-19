import '../App.css';
import { useState } from 'react';
import "./css/Home.css";

function Home() {

    //State
    const [arrayData, setArray] = useState([]);
    const [xPos, setX] = useState(0);
    const [yPos, setY] = useState(0);

    //Js Related to This Page 
    var test = document.getElementById("HomeBox1");
    if (test != null) test.onmouseover = function (x) { console.log("Mouse Hover", x) }

    document.onmousemove = function (x) { setX(x.pageX); setY(x.pageY) }

    return (
        <>
            <div className="container Home">
                <div className="row">
                    <div className="col text BlackBox" id="HomeBox1">Mouse Position X:
                        <div id="PosX">{xPos}</div>
                    </div>
                    <div className="col text BlackBox2" id="HomeBox2" >Mouse Position Y:
                        <div id="PosY">{yPos}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="text col BlackBox" id="HomeBox3"> Head Box 3</div>
                </div>
                <div className="row">
                    <div className="col text BlackBox" id="HomeBox4">Mouse Position X:
                        <div id="PosX">{xPos}</div>
                    </div>
                    <div className="col text BlackBox2" id="HomeBox5" >Mouse Position Y:
                        <div id="PosY">{yPos}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text BlackBox3" id="HomeBox6">
                        <span>HeadsUp</span>
                        <div id=""></div>
                    </div>
                </div>
                <div className="text" id="Heading"></div>
            </div>
        </>
    );
}

export default Home;
