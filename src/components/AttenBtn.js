import React from 'react';

const style = {

};

const AttenBtn = ({markFunc, status}) => (
    <button style={style} onClick={markFunc}>{status}</button>
);

export default AttenBtn;