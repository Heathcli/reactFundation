import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import MyNavLink from '../MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to='/home/News'>News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to='/home/Message'>Message</MyNavLink>
                    </li>
                    </ul>
                </div>
                <Route path='/home/News' component={News}/>
                <Route path='/home/Message' component={Message}/>
                <Redirect to='/home/News'/>
            </div>
        )
    }
}
