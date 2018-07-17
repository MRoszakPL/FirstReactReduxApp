import React, {Component} from 'react';
import SearchBar from '../containers/searchBar';
import ListOfCities from '../containers/listOfCities';

export default class App extends Component{
    render(){
        return (<div className={'col-md-12'} >
            <SearchBar/>
            <ListOfCities className={'row'}/>
        </div>)
    }
}