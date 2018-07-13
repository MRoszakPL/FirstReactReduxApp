import React from 'react';
import {Component} from 'react';
import BookList from '../container/bookList';
import BookDetail from '../container/bookDetail';

export default class Index extends Component{

    render() {
        return (
            <div>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}