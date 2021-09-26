import React,{Component} from 'react'

import './index.css'

export default class Item extends Component {
  // 鼠标状态表示
  state = {mouse:false}
  // 鼠标高亮显示/取消
  mouseState = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }
  // 删除todo
  removeItem = (id) => {
    if(window.confirm('确定删除吗？')) {
      this.props.removeTodo(id)
    }
  }
  // 更改todo的done状态
  handleCheck =(id) => {
    return (event) => {
      this.props.changeChecked(id,event.target.checked);
    }
  }

 

    render() {
      const {id,name,done} = this.props;
      const {mouse} = this.state;
        return (
            <li style={{backgroundColor:mouse ? '#ccc' : '#fff'}} onMouseEnter={this.mouseState(true)} onMouseLeave={this.mouseState(false)}>
              <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
              </label>
              <button onClick={()=>{this.removeItem(id)}} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}