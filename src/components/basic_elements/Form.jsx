import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [pushArray, setPushArray] = useState([]);

  const [resArray, setResArray] = useState([]);
  const handleChange = (event) => {
    //récupérer la valeur de l'input en cours de saisie
    //Ajouter un listener qui va récupérer la valeur en cours de saisie
    //appeler la fonction event de javascript et accédez au target pour récupérer par la suite la valeur en cours de saisie
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPushArray([...pushArray, inputValue]);
    console.log("1", [...pushArray, inputValue]);

    setInputValue("");
  };

  const getGlobalResult = (e) => {
    e.preventDefault();
    setResArray([...pushArray]);
    console.log("3", [...resArray, inputValue]);
  };
  return (
    <div>
      <p>my form</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter you value ..."
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button disabled={inputValue === "" ? 
        true : false} type="submit">
          Submit
        </button>{" "}
        :
      </form>
      <div>
        -- Push Array Res --
        {pushArray.map((item, index) => (
          <div key={index}>** {index}  
          --  {item} **</div>
        ))}
        <p>Length :  {pushArray.length}</p>
      </div>
      <div>
        <button hidden={pushArray.length === 0}
         onClick={getGlobalResult}>
          Submit</button>
        <p> Res Array Concat</p>
        {resArray.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Form;
