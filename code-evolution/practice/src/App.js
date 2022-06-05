import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello_class";
import Tryjsx from "./components/Tryjsx";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ParentCompo from "./components/ParentCompo";
import CounterOne from "./components/CounterOne";

function App() {
  return (
    <div className="App">
      <CounterOne />
      {/* <Counter /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Arshad" sport="Cricket">
        <p>Additional Unknow proprty can be rendered here</p>
      </Greet>
      <Greet name="Ali" sport="Football">
        <button>Action</button>
      </Greet>
      <Greet name="saifi" sport="Gymming">
        <button> submit</button>
      </Greet> */}
      {/* <Hello />
      <Tryjsx /> */}
    </div>
  );
}

export default App;
