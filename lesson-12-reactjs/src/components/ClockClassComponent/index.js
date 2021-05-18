import React from 'react'

import './style.css'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div className="Time-Robot">
          <h1>Time Machine</h1>
          <h2>Bây giờ là {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock