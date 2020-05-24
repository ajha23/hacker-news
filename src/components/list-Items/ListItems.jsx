import React, { useEffect, useState, useRef } from 'react';

import './ListItems.scss';

import { Button } from '../../common'

export const ListItems = ({ item }) => {
    const [point, setPoint] = useState(item.points);
    const list = useRef(null);
    const voteBtn = useRef(null);

    const handelHideClick = () => {
        list.current.style.display = 'none';
    };

    const handlePointClick = () => {
        voteBtn.current.style.visibility= 'hidden';
        setPoint(point + 1);
        localStorage.setItem(item.objectID, JSON.stringify(point + 1))
    };

    useEffect(() => {
        const savedPoint = localStorage ? localStorage[item.objectID] ? JSON.parse(localStorage[item.objectID]) : null : null;
        if (savedPoint !== null) {
            setPoint(savedPoint);
        }
    }, [point, item.objectID]);


    return (
        <li ref={list} className="display-container">
            <div className="badge-container">
                <span className="badge badge-salmon">{item.num_comments}</span>
                <span className="badge badge-green">{point}</span>
            </div>
            <span ref={voteBtn}><Button onClick={handlePointClick}>&#9650;</Button></span>
            {item.title}
            <span className="url">{
                item.url ?
                    <a href={item.url}>
                        {"(" + item.url.split('//')[1].split('/')[0] + ")"}
                    </a>
                    : null}
            </span>
            <span className="btn-display-right"><Button onClick={handelHideClick}>&times;</Button></span>
        </li>
    );
};