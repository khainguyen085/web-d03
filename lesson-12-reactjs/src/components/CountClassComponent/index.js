import React from 'react'

import './style.css'


class CountMachine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        // this.clickAndUp = this.clickAndUp.bind(this)
    }
    clickAndUp =()=>{
        this.setState(state=>({
            count: state.count +1
        }))
    }
    render() {
        return (
            <div className="Count-Machine">
                <h1>Count:{this.state.count}</h1>
                <button className="count-btt" onClick={this.clickAndUp}>Click</button>
            </div>
        )
    }
}

export default CountMachine