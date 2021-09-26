import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import List from './List'


class Todolist extends Component {
    // 初始化状态
    state = {
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: false
            },
            {
                id: '002',
                name: '睡觉',
                done: false
            },
            {
                id: '003',
                name: '打游戏',
                done: true
            }
        ]
    }

    // 添加一个Todo
    addTodo = todoObj => {
        // 解构赋值获取todos
        const { todos } = this.state;
        // 扩展运算符添加新todo
        let newTodos = [todoObj, ...todos]
        // 重新设置state
        this.setState({ todos: newTodos });
    }

    // 更新todo的done状态
    changeChecked = (id, checked) => {
        const newtodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: checked }
            } else {
                return todo
            }
        })

        this.setState({ todos: newtodos })
    }

    // 删除todo
    removeTodo = (id) => {
        const {todos} = this.state
        let newTodos = todos.filter((todo)=>{
            return todo.id !== id
        })

        this.setState({todos:newTodos})
    }
    
    // 全选
    checkAll = (done) => {
        const {todos} = this.state
        let newTodos = todos.map((todo)=>{
            return {...todo,done:done}
        })
        this.setState({todos:newTodos})
    }
    
    // 删除选定的
    removeAllChecked = () => {
        const {todos} = this.state
        let newTodos = todos.filter((todo)=>{
            return todo.done === false
        })
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} changeChecked={this.changeChecked} removeTodo={this.removeTodo} />
                    <Footer todos={todos} checkAll={this.checkAll} removeAllChecked={this.removeAllChecked}/>
                </div>
            </div>
        )
    }
}

export default Todolist;