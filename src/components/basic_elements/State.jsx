// 1
import { useState } from "react";
// 2
const State = () => {
    const [count, setCount]= useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count - 1)}>
                decrement</button>
            <p>{count}</p>
            <button onClick={()=>setCount(count + 1)}>
                increment</button>

        </div>
    )
}
//3
export default State;