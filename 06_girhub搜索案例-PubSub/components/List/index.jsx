import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state={
        users:[],
        welcome:true,
        loading:false,
        err:''
    }

    componentDidMount() {
        this.token = PubSub.subscribe('getState',(_,stateObj) => {
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }


    render() {
        const{users,welcome,loading,err} = this.state
        return (
            <div className="row">
                {
                    welcome ? <h4>输入关键词搜索用户信息</h4> :
                    loading ? <h4>Loading....</h4> :
                    err ? <h4 style={{color:'red'}}>{err.message}</h4> :
                    users.map((user)=>{
                        return (
                            <div key={user.id} className="card">
                                <a rel="noreferrer" href={user.html_url} target="_blank">
                                    <img alt='avatar' src={user.avatar_url} style={{width: '100px'}} />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
