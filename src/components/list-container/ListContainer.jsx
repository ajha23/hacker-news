import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './ListContainer.scss'

import { ListItems } from '../list-Items'

export const ListContainer = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://hn.algolia.com/api/v1/search?page=${page}`);
                setData(response.data.hits);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();


    }, [page]);

    const handelMoreClick = () => {
        setPage(page + 1);
    }
    return (
        <ul className="card">
            <div className="header-container">
                <b>Welcome</b>
            </div>
            {data.map(item => {
                return item.title ? <ListItems key={item.created_at} item={item} /> : null;
            })}
            <div  className="btn-container"><button className="btn-more" onClick={handelMoreClick}>More</button></div>
        </ul>
    );
};
