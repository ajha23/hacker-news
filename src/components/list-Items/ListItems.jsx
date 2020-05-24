import React, { useState, useEffect } from 'react';

import './ListItems.scss';

import { Button } from '../../common'

export const ListItems = ({ item }) => {
    const [point, setPoint] = useState(item.points);
    const handlePointClick = (e) => {
        console.log(e.target.current);
        setPoint(point + 1);
        localStorage.setItem(item.objectID,JSON.stringify(point+1))
    }

    useEffect(() => {
       const savedPoint= localStorage ? localStorage[item.objectID] ? JSON.parse(localStorage[item.objectID]): null : null;
        if( savedPoint !== null){
            setPoint(savedPoint);
        }
    },[point, item.objectID]);


    return (
        <li className="display-container">
            <div className="badge-container">
                <span className="badge badge-salmon">{item.num_comments}</span>
                <span className="badge badge-green">{point}</span>
            </div>
            <Button refs={item.objectID} onClick={e=> handlePointClick(e)}>&#9650;</Button>
            {item.title}
            <span className="url">{
                item.url ?
                    <a href={item.url}>
                        {"(" + item.url.split('//')[1].split('/')[0] + ")"}
                    </a>
                    : null}
            </span>
            <span className="btn-display-right"><Button>&times;</Button></span>
        </li>
    );
};