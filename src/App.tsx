import style from "./App.module.css";
import Counter from "./components/Counter";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import Toggle from "./components/Toggle";
import Countdown from "./components/Сountdown";

function App() {
  return (
    <main className={style.main}>
      <Counter></Counter>
      <Toggle></Toggle>
      <InputField></InputField>
      <ToDoList></ToDoList>
      <Countdown timeStart={2} timeEnd={10}></Countdown>
    </main>
  );
}

export default App;
