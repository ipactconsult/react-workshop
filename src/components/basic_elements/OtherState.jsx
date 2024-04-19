import { useState } from "react";

const OtherState = () => {
    const [count, setCount] = useState(0);
    const handleClickDecrement = (e) => {
        e.preventDefault();
        if( count <= 0) {
            alert('negative');
        }else {
            setCount(count - 1);
        }
    }
    const handleClickInrement = (e) => {
        e.preventDefault();
        if( count >= 3) {
            alert('max');
        }else {
            setCount(count + 1);
        }
    }
    return (
        <div>
            <button onClick={handleClickDecrement}>
                decrement</button>
            <p>{count}</p>
            <button onClick={handleClickInrement}>
                increment</button>

        </div>
    )
}
export default OtherState;