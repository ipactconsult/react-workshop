import logo from "./logo.svg";
import "./App.css";
import ArrowChildOne from "./components/arrow_functions/ArrowChildOne";
import ArrowChildTwo from "./components/arrow_functions/ArrowChildTwo";
import ArrowChildThree from "./components/arrow_functions/ArrowChildThree";
import ClassChildOne from "./components/classes/ClassChildOne";
import ClassChildThree from "./components/classes/ClassChildThree";
import ClassChildTwo from "./components/classes/ClassChildTwo";
import ChildOne from "./components/functions/ChildOne";
import ChildTwo from "./components/functions/ChildTwo";
import ChildThree from "./components/functions/ChildThree";
import Props from "./components/basic_elements/Props";
import State from "./components/basic_elements/State";
import Hooks from "./components/basic_elements/Hooks";
import LifeCycle from "./components/basic_elements/LifeCycle";
import SideEffect from "./components/basic_elements/SideEffect";
import StyledComponent from "./components/basic_elements/StyledComponent";
import ErrorBoundary from "./components/basic_elements/ErrorBoundary";
import ErrorProneComponent from "./components/basic_elements/ErrorProneComponent";
import Form from "./components/basic_elements/Form";
import DOM from "./components/basic_elements/DOM";
import ChildFour from "./components/functions/ChildFor";
import OtherProps from "./components/basic_elements/OtherProps";
import OtherState from "./components/basic_elements/OtherState";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Function Component</h2>
        <ChildOne />
        <ChildTwo />
        <ChildThree />
        <ChildFour/>
        <h2>Function Component with arrow declaration</h2>
        <ArrowChildOne />
        <ArrowChildTwo />
        <ArrowChildThree />
        <h2>Class Component</h2>
        <ClassChildOne />
        <ClassChildTwo />
        <ClassChildThree />

        <hr />
        <h2>Basics Elements Exercices</h2>
        <h3>props</h3>
        <Props title="Good" 
        description="Test Du Jour" />
         <h3>other props</h3>
        <OtherProps name="Amine" />
        <h3>state</h3>
        <OtherState />
        <h3>hooks</h3>
        <Hooks />
       {/*  <h3>Life Cycle</h3>
        <LifeCycle />  */}
      
     {/*     <h3>Side Effect</h3>
        <SideEffect />  */}
{/*         <button onClick={() => setShowSide(!showSide)}>Toggle Component</button>*/}        
         <h3>Styled Component</h3>
        <StyledComponent />

        <h3>Error Boundary</h3>
        <ErrorBoundary>
          <ErrorProneComponent tag={document.title}/>
        </ErrorBoundary>

       <h4>Form</h4>
        <Form />
        

         <h3>DOM Manipulation</h3>
        <DOM /> 

      </header>
    </div>
  );
}

export default App;
