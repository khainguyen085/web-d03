import { useState, useEffect } from 'react';
import './style.css'

function ClockHooks() {
  const [date, setDate] = useState(new Date());

 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(new Date());
   }

   return (
      <div className="new-clock">
        <h1>New Clock</h1>
        <h2>{date.toLocaleTimeString()}.</h2>
      </div>
    );
}

export default ClockHooks