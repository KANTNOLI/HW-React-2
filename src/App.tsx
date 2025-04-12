import style from "./App.module.css";
import Counter from "./components/Counter";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import Toggle from "./components/Toggle";

function App() {
  return (
    <main className={style.main}>
      <Counter></Counter>
      <Toggle></Toggle>
      <InputField></InputField>
      <ToDoList></ToDoList>
    </main>
  );
}

export default App;
