import '../App.css';
import { useState } from 'react';
import "./css/Home.css";

function Home() {

    //State
    const [xPos, setX] = useState(0);
    const [yPos, setY] = useState(0);
    const [mobileXpos, setMobX] = useState(0);
    const [mobileYpos, setMobY] = useState(0);


    document.onmousemove = function (x) { setX(x.pageX); setY(x.pageY) }
    document.addEventListener('touchmove', (x) => {
        var touches = x.touches[0];
        setMobX(parseInt(touches.screenX));
        setMobY(parseInt(touches.screenY));
    });

    document.querySelector("body").style.backgroundColor = "#010101";


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
                    <div className="col text BlackBox" id="HomeBox4">Swipe Position X:
                        <div id="PosX">{mobileXpos}</div>
                    </div>
                    <div className="col text BlackBox2" id="HomeBox5" >Swipe Position Y:
                        <div id="PosY">{mobileYpos}</div>
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
