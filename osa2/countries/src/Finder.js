import React from 'react';

const Finder = ({search, handleIt}) => {
    return (
        <div>
            Find countries <input
            value={search}
            onChange={handleIt}
            />      
        </div>
    )
}

export default Finder;
