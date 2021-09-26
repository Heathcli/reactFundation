import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class todolist extends Component {

    state={
        users:[],
        welcome:true,
        loading:false,
        err:''
    }

    updataState = (stateObj) => {
        this.setState(stateObj)
        
    }


    render() {
        return (
            <div className="container">
                <Search updataState={this.updataState}/>
                <List {...this.state}/>
                
            </div>
        )
    }
}
