import React from 'react';

function Jumbotron(){
    return(
        <div className="jumbotron jumbotron-fluid" style={{"backgroundColor" : "white"}}>
            <div className="container">
                <h1 className="display-4">Receipt Printer</h1>
                <p className="lead">A tool that help you to calculate basic sales tax and import duty.</p>
            </div>
        </div>
    )
}
export default Jumbotron;