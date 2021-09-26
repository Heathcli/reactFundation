import React, { Component } from 'react'
// import querystring from 'querystring'



export default class Detail extends Component {

 

    state = {
        detailContents:[
            {id:'01',content:'1号消息体'},
            {id:'02',content:'2号消息体'},
            {id:'03',content:'3号消息体'},


        ]
    }

    render() {

        // 从params上获取参数
        // const {id,title} = this.props.match.params

        // 获取search属性
        // const {search} = this.props.location
        // 从search上获取id、title并用qs转换成对象格式
        // const {id,title} = querystring.parse(search.slice(1))

        // 从state上获取参数
        const {id,title} = this.props.location.state
        
        const text = this.state.detailContents.find((detailContent) => {
            return detailContent.id === id;
        })

        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{text.content}</li>
            </ul>
        )
    }
}
