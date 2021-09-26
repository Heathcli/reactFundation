import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {

    state = {
        detailContents:[
            {id:'01',content:'1号消息体'},
            {id:'02',content:'2号消息体'},
            {id:'03',content:'3号消息体'},


        ]
    }

    render() {

        // 获取search属性
        const {search} = this.props.location
        // 从search上获取id、title并用qs转换成对象格式
        const {id,title} = qs.parse(search.slice(1))

        
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
