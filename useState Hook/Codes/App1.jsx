import React, {useState} from "react";

function App()
{
    //Destructuring concept of ES6
    const [count,setCount] = useState(0);

    function increase()
    {
        setCount(count + 1);
    }
    function decrease()
    {
        setCount(count - 1);
    }

    return (<div className="container">
    <h1>{count}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>);
}

export default App;
