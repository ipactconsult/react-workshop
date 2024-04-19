import { useEffect } from "react";

const SideEffect = () => {
  useEffect(() => {
    alert("side effect executed");
    document.title = "Updated Title";

    return () => {
      alert("Cleanup side effect");
      document.title = "React App";
    };
  }, []);
};
export default SideEffect;



