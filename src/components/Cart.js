import React from 'react';

function Cart(props) {
    return (
        <div className = 'Cart'>
            {props.items.map((item, index) => 
                <h5 key = {index}>{item.quantity} {item.name} at {item.price}</h5>
                )}
        </div>
    );
}
export default Cart;