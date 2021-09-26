import React, { Component } from 'react'
import axios from 'axios'

export default class Todolist extends Component {

    getData = () => {
        axios.get('http://localhost:3000/api1/students').then(
                response => {console.log(response.data)},
                error => {console.log(error)}
            )
    }
    getCar = () => {
        axios.get('http://localhost:3000/api2/cars').then(
                response => {console.log(response.data)},
                error => {console.log(error)}
            )
    }

    render() {
        return (
            <div>
                <button onClick={this.getData}>点击获取学生数据</button>
                <button onClick={this.getCar}>点击获取汽车数据</button>
            </div>
        )
    }
}
