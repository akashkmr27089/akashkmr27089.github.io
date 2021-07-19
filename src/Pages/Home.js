import '../App.css';
import { useState } from 'react';
import "./css/Home.css";

function Home() {

    //State
    const [pohaPos, pohaFunc] = useState(0);
    const [xPos, setX] = useState(0);
    const [yPos, setY] = useState(0);

    document.onmousemove = function (x) { setX(x.pageX); setY(x.pageY) }

    // Js for moving Circles
    var dot = document.querySelector('#dot');
    // setInterval()
    // window.setTimeout(1000, dot.style.)
    // setInterval(() => {
    //     { setArray(arrayData.push(2)) };
    //     console.log(arrayData);
    // }, 10000)



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
                        <div className="row" id="NamesHead">Poha</div>
                        <div className="row" id="MovableBox">
                            <div id="dot"></div>
                            {/* <div id="dot2"></div> */}
                        </div>
                        <div className="row" id="">

                        </div>
                    </div>
                </div>
                <div className="text" id="Heading"></div>
            </div>
        </>
    );
}

export default Home;
