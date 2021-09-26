import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';

import './index.css'

export default class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }


    dealKeyUp = (event) => {
        // 解构赋值获取keyCode,target
        const {keyCode,target} = event;
        // 条件判断是否按下回车
        if(keyCode !== 13) return
        // 判断是否为空内容
        if(target.value.trim() === '') {
            alert('请输入内容！')
            return
        }
        // 准备好一个todoObj id用nanoid生成
        let todoObj = {id:nanoid(),name:target.value,done:false}
        // 调用父组件的函数添加到List中
        this.props.addTodo(todoObj)
        // 最后清空输入框
        event.target.value = ''
    }

    render() {
        return(
            <div className="todo-header">
                 <input onKeyUp={this.dealKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}