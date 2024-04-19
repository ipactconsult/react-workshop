import { useEffect } from "react";

const LifeCycle = () => {
  
  useEffect(() => {
    alert("Component mounted");
    return () => {
      alert("Component rendered - Component will unmount");
    };
  }, []);
  return (
    <div>
      <p>Le composant LifeCycle est monté.</p>
    </div>
  );
};
export default LifeCycle;
