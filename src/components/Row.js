import React from 'react';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
};

const Row = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default Row;
