import React, { useState } from 'react'

import './style.css'

function CounterMachine() {
    const [count, setCount] = useState(0)

    return (
        <div className="new-counter">
            <p>you clicked me {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}
export default CounterMachine;