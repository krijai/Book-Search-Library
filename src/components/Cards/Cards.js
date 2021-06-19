import React, { Fragment, useState } from 'react';
import './Cards.scss';
import axios from 'axios';

const Cards = (props) => {

    const promiseData = async (val) => {
        let res='#';
        if(val) {
            res = await axios.get(`http://covers.openlibrary.org/b/isbn/${val}-M.jpg`);
            res = res.config.url
        }
        return res
    }
    return (
        <div className="card-wrapper">
            {props.data ? 

            props.data.map((item, index) => {
                let res;
                let isbn = item.hasOwnProperty('isbn');
                isbn = (isbn ? item.isbn[0] : '');
                res = promiseData(isbn);
                let objValue = res.then((data) => {
                    return ({ id: item._version_, title: item.title, year: item.first_publish_year, url: data })
                })
                let year = item.hasOwnProperty('first_publish_year') ? item.first_publish_year : 0;
                let authorName = item.hasOwnProperty('author_name') ? item.author_name[0] : 'N/A';
                let value;
                objValue.then((val) => value = 'val.url');
                console.log('val.url----------------', value);
                return (<div className="card-details" key={item._version_}>
                        <div className="card-image">
                            {/* <img src={res ? res.config.url : ''} alt="No URL"/> */}
                        </div>
                        <div className="card-text">
                            <p><strong>Title:</strong> {item.title} </p>
                            <p><strong>Year:</strong> {year}</p>
                            <p><strong>Author:</strong> {authorName}</p>
                            <p><strong>URL:</strong>{value}</p>
                            </div>
                        </div>);
            })
            : 'No Data'
            }
        </div>
    )
}

export default Cards;
