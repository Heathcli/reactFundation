import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {

    forward = () => {
        this.props.history.goForward()
    }
    back = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                &nbsp;<button onClick={()=>this.forward()}>前进</button>
                &nbsp;<button onClick={()=>this.back()}>后退</button>
            </div>
            
        )
    }
}

export default withRouter(Header)