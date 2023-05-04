import "./App.css";
import Foter from "./foter";
import Header from "./header";
import Content from "./content";
import Arrray from "./arrrays";
import Counter from "./state";
import Clubs from "./clubs";
import Color from "./color";
import Inpput from "./inpput";
import Change from "./change";
import Increment from "./increment";

function App() {
  return (
    <div className="App">
      <Header />
      <Content prop="Aginga" />
      <Content prop="Brian" />
      <Content prop={24} />
      <Arrray />
      <Counter />
      <Color />
      <Clubs />
      <Foter />
      <Inpput />
      <Change />
      <Increment />
    </div>
  );
}

export default App;
