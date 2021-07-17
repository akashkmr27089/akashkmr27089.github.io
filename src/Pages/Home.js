import '../App.css';
import { useState } from 'react';
import { timeout } from 'async';

function Home() {

    //State
    const [arrayData, setArray] = useState([]);

    //Js Related to This Page 
    var test = document.getElementById("HomeBox1");
    if (test != null) test.onmouseover = function (x) { console.log("Mouse Hover", x) }

    return (
        <>
            <div className="container Home">
                <div className="row">
                    <div className="col text BlackBox" id="HomeBox1">Home Box 1</div>
                    <div className="col text BlackBox2" id="HomeBox2" >Home Box 2</div>
                </div>
                <div className="row">
                    <div className="text col BlackBox" id="HomeBox3"> Head Box 3</div>
                </div>
                <div className="text" id="Heading"></div>
            </div>
        </>
    );
}

export default Home;
