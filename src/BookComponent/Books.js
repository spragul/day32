import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppState } from '../Book/provider';
import Sidebar from "../sidebar/sidebar";


export default function ListOfBooks() {
    const { book } = AppState();
    const history = useHistory();

    return (
        <Sidebar>
            <div className='book-condinar'>
                {
                    book.map((books, index) => (
                        <div key={index} className="book-card">
                            <h3>{books.name}</h3>
                            <img src={books.image} alt={books.name} title={books.name} className="image"></img>
                            <p>{books.author}</p>
                            <div className='btn-group'>

                                <button
                                    className='button button-view'
                                    onClick={() => history.push(`/book/detail/${index}`)}
                                >View Detail
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Sidebar>
    );
};

