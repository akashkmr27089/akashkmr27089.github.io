const AcordianGrid = ({ Heading, Content, id }) => {

    return (
        <>
            <div id="accordion">
                <div class="card">
                    <div class="card-header" id={`name${id}`} >
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`}>
                                {Heading}
                            </button>
                        </h5>
                    </div>

                    <div id={`collapse${id}`} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            {Content}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AcordianGrid;