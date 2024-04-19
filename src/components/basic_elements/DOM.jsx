import { useRef } from "react";

const DOM = () => {
  const inputRef = useRef(null);
  const otherInputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  const focusInput1 = () => {
    otherInputRef.current.focus();
  };


  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <input ref={otherInputRef} type="text" />
      <button onClick={focusInput1}>Focus Input 1</button>
      <br/>
      <br/>
    </div>
  );
};
export default DOM;
