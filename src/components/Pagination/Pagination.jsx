import React from 'react';
import './pagination.scss';
import axios from "axios";

const Pagination = ({data, setData}) => {
    async function fetch(url) {
        const response = await axios.get(url);
        setData(response.data);
    }

    return (
        <div className="pagination">
            {data && data.links.length !== 3 && data.links.map((item, index, array) => {
                return (
                    <div
                        key={item.label}
                        className={`pagination-item-wrapper ${index === 0 || index === array.length - 1 ? 'pagination-item-wrapper--control-wrapper' : ''}`}>
                                <span
                                    className={`pagination-item ${item.active ? `pagination-item--active` : ''}`}
                                    onClick={() => {
                                        item.url && fetch(item.url);
                                    }}>{item.label}</span>
                    </div>
                )
            })}
        </div>

    );
};

export default Pagination;