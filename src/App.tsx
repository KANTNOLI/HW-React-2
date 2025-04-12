import style from "./App.module.css";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  return (
    <main className={style.main}>
      <Counter></Counter>
      <Toggle></Toggle>
    </main>
  );
}

export default App;
