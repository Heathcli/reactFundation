import React, { Component } from 'react'

export default class Detail extends Component {

    state = {
        detailContents:[
            {id:'01',content:'1号消息体'},
            {id:'02',content:'2号消息体'},
            {id:'03',content:'3号消息体'},


        ]
    }

    render() {

        const {id,title} = this.props.match.params
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
