import React from 'react';

function Receipt(props) {
    return (
        <div className = 'Receipt card m-2'>
            <div className="card-body shadow p-4">
                <h5 className="card-title text-center">Welcome to Andrew's Grocery</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">Price with related taxes</h6>
                <br/><br/>
                {props.itemsPricesWithTax.length === 0 && <h6 className="text-center text-danger">You haven't checked out yet</h6>} 
                    {/* Separate items: */}
                    <div className="row">
                        <div className='col-8'>
                            {props.itemsPricesWithTax.length > 0 && props.items.map((item, index) => 
                                <p className='card-text' key = {index}>{item.quantity} x {item.name} {item.imported ? '**' : ''}</p>
                            )}
                        </div>
                        <div className='col-4 text-right'>
                            {props.itemsPricesWithTax.length > 0 && props.itemsPricesWithTax.map((price, index) => 
                                <p className='card-text' key = {-index}>${price.toFixed(2)}</p>
                            )}
                        </div>
                    </div>
                    <hr />

                    {/* Tax and title: */}
                    <div className="row">
                        <div className='col-8'>
                            {props.itemsPricesWithTax.length > 0 &&
                                <div>
                                    <p className='font-weight-bold'>Sales Tax: </p>
                                    <p className='font-weight-bold'>Total: </p>
                                    <br />
                                </div>
                            }
                        </div>
                        <div className='col-4 text-right'>
                            {props.itemsPricesWithTax.length > 0 &&
                                <div>
                                    <p className="font-weight-bold">${props.tax}</p>
                                    <p className="font-weight-bold">${props.total}</p>
                                    <p className="font-italic">** imported</p>
                                    {/* <button className='btn-dark'>Download</button> */}
                                </div>
                            }
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Receipt;