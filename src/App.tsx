import style from "./App.module.css";
import Counter from "./components/Counter";

function App() {
  return (
    <main className={style.main}>
      <Counter></Counter>
    </main>
  );
}

export default App;
