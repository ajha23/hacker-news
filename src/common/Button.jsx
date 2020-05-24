import React from 'react';
import './Button.scss';

export const Button = ({ onClick, children }) => {
    return (
        <span onClick={onClick} className="btn">{children}</span>
    );
};