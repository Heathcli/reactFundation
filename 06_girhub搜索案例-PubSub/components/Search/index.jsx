import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'


export default class Search extends Component {



    search = () => {
        // 获取用户的输入
        const {value} = this.keyWordNode;
        // this.props.updataState({
        //     welcome:false,
        //     loading:true
        // })
        PubSub.publish('getState',{welcome:false,loading:true})

        // 发送axios请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                    // this.props.updataState({
                    //     loading:false,
                    //     users:response.data.items
                    // })
                    PubSub.publish('getState',{loading:false,users:response.data.items})
                },
            error => {
            //    this.props.updataState({
            //         loading:false,
            //         err:error
            //    })
               PubSub.publish('getState',{loading:false,err:error})
            })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={ c => {this.keyWordNode = c}} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
