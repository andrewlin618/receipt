import React from 'react';

function Basket(props) {
    return (
        <div className = 'Basket card w-75'>
            <div className="card-body shadow p-4">
                <h5 className="card-title text-center">Shopping Basket</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">Price without taxes</h6>
                {props.items.length === 0 && <h5 className="text-center text-danger">You shopping basket is empty</h5>} 
            </div>
        </div>
    );
}
export default Basket;