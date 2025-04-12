import style from "./App.module.css";
import Counter from "./components/Counter";
import InputField from "./components/InputField";
import Toggle from "./components/Toggle";

function App() {
  return (
    <main className={style.main}>
      <Counter></Counter>
      <Toggle></Toggle>
      <InputField></InputField>
    </main>
  );
}

export default App;
