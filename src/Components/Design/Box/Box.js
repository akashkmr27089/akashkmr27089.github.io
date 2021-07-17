import './Box.css'

const Box = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text BlackBox" id="ColorTesting">Color Testing</div>
                    <div className="col text BlackBox2" id="ColorTestingBox">Color Testing Box </div>
                </div>
                <div className="row">
                    <div className="text col BlackBox" id="EventTesting"> Event Testing  </div>
                </div>
                <div className="text" id="Heading"></div>
            </div>
        </>
    );
};

export default Box;