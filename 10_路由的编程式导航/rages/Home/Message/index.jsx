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

    pushShow = (id,title) => {
        // params
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // search
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        // state
        this.props.history.push(`/home/message/detail`,{id,title})
    }

    replaceShow = (id,title) => {
        // params
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // search
        this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

         // state
         this.props.history.replace(`/home/message/detail`,{id,title})
        
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
                                    {/* params方式传递参数 */}
                                    {/* <Link to={`/home/message/detail/${Item.id}/${Item.title}`}>{Item.title}</Link> */}

                                    {/* search方式传递参数 */}
                                    <Link to={`/home/message/detail/?id=${Item.id}&title=${Item.title}`}>{Item.title}</Link>

                                    {/* state方式传递参数 */}
                                    {/* <Link to={{pathname:"/home/message/detail",state:{id:Item.id,title:Item.title}}}>{Item.title}</Link> */}
                                    &nbsp;<button onClick={()=>this.pushShow(Item.id,Item.title)}>push查看</button>
                                    &nbsp;<button onClick={()=>this.replaceShow(Item.id,Item.title)}>replace查看</button>
                                </li>
                            )
                        })
                
                    }
                </ul>
                {/* params方式接收参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}


                {/* search、state方式接收参数 */}
                <Route path='/home/message/detail' component={Detail}/>
            </div>
        )
    }
}
