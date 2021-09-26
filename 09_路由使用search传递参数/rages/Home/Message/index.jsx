import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

    state = {
        messageArr:[
            {id:'01',title:'消息一'},
            {id:'02',title:'消息二'},
            {id:'03',title:'消息三'}
        ]
    }


    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((Item) => {
                            return (
                                <li key={Item.id}>
                                    {/**params方式传递参数
                                    <Link to={`/home/message/dateil/${Item.id}/${Item.title}`}>{Item.title}</Link>**/}

                                    {/* search方式传递参数 */}
                                    <Link to={`/home/message/dateil/?id=${Item.id}&title=${Item.title}`}>{Item.title}</Link>

                                </li>
                            )
                        })
                
                    }
                </ul>
                {/* params方式接收参数
                <Route path='/home/message/dateil/:id/:title' component={Detail}/> */}

                <Route path='/home/message/dateil' component={Detail}/>
            </div>
        )
    }
}
