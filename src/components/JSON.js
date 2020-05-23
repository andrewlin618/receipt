import React from 'react';

function Code(props) {
    return (
        <div className = 'Code shadow p-3 m-2'>
            <h5 className='text-center'>JSON</h5>
            <pre  style={{lineHeight:'1rem'}}><span class="inner-pre">{JSON.stringify(props.items, null, 2)}
            </span>
            </pre>
        </div> 
    );
}
export default Code;