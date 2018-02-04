import React from 'react';

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const Column = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default Column;