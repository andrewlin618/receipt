import React from 'react';

function Basket(props) {
    return (
        <div className = 'Basket'>
            {props.items.map((item, index) => 
                <p key = {index}>{item.quantity} {item.imported ? 'imported' : ''} {item.name} at {item.price}</p>
                )}
        </div>
    );
}
export default Basket;