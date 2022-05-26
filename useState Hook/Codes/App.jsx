import React, {useState} from "react";

function App()
{

    let init = new Date().toLocaleTimeString('en-GB');
    const [time, set] = useState(init);
    
    function setTime()
    {
        set(new Date().toLocaleTimeString('en-GB'));
    }

    setInterval(setTime,1000);

    return (<div className="container">
    <h1>{time}</h1>
    <button onClick={setTime}>Get Time</button>
  </div>);
}

export default App;