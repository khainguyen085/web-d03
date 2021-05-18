import React from 'react'

import './style.css'

class UserComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="func-component">
            <h1 className="func-com-name">Name: {this.props.name}</h1>
            <h2 className="func-com-age">Age: {this.props.age}</h2>
            <h2 className="func-com-gender">Gender: {this.props.gender}</h2>
          </div>
        )
    }
}

export default UserComponent