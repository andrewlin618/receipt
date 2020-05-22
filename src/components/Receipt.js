import React from 'react';

function Receipt(props) {
    return (
        <div className = 'Receipt'>
            <h3>This is your receipt.</h3> 
            {props.items[0].priceAfterTax && props.items.map((item, index) => 
                <h5 key = {index}>{item.quantity} {item.name} at {item.priceAfterTax}</h5>
                )}
            {props.items[0].priceAfterTax &&
                <div>
                    <hr/>
                    <h5>Sales Tax: {props.tax}</h5>
                    <h5>Total :{props.total}</h5>
                </div>
            }
        </div>
    );
}
export default Receipt;