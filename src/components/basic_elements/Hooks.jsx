import { useEffect, useState } from "react";

const Hooks = () => {
  const [data, setData] = useState([]);
  const [data1,setData1]=useState(["test1","test2","test3"]);
  useEffect(() => {
    setData(["jhon@gmail.com", "douglas@gmail.com", "alexis@gmail.com"]);
    setData1(data1);
  }, []);

  console.log("res data1"+data1);

  return <p>{data.map((item) => item + " / ")}</p>;
};
export default Hooks;


