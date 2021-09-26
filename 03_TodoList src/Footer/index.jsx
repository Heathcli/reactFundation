import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {

    state = {flag:false}
    


    allChange= (event) => {
        this.props.checkAll(event.target.checked);
    }
    removeAll = () => {
        this.props.removeAllChecked();
       
    }

    render() {
        const {todos} = this.props
        const finishTodo = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={finishTodo === todos.length && todos.length !== 0} onChange={this.allChange}/>
                </label>
                <span>
                    <span>已完成{finishTodo}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.removeAll}>清除已完成任务</button>
            </div>
        )
    }
}

