import React from 'react';

const MiniContainer = (props) => {
    return (
        <div className='minicontainer'>
            {props.children}
        </div>
    );
}

export default MiniContainer;
