import { useEffect, useState } from "react";
import style from "./Counter.module.css";

const LOCALSTORE_KEY = "123";

function Counter() {
  const [Count, setCount] = useState<number>(0);

  useEffect(() => {
    const storageLog = localStorage.getItem(LOCALSTORE_KEY);
    const init = storageLog ? Number(storageLog) : 0;

    setCount(init);

    return () => {
      localStorage.setItem(LOCALSTORE_KEY, Count.toString());
    };
  }, []);

  return (
    <section className={style.body}>
      <p className={style.condition}>
        1. Создайте компонент Counter, который отображает счетчик и кнопки
        "Увеличить" и "Уменьшить". Используйте useState для хранения значения
        счетчика. При нажатии на кнопки счетчик должен увеличиваться или
        уменьшаться на единицу. Добавье в компонент кнопку для сброса счётчика
        на стартовое значение 0.
        <br />
        <br />
        Усложнение: при размонтировании (уничтожении/выгрузке) компонента -
        сохранять состояние в LocalStorage. При монтировании (создании/загрузке)
        проверять, есть ли там значение и брать его оттуда, если запись имеется
        в хранилище.
      </p>

      <p className={style.counter}>Counter: {Count}</p>
      <button onClick={() => setCount(Count + 1)}>add</button>
      <button onClick={() => setCount(Count - 1)}>remove</button>
      <button onClick={() => setCount(0)}>clear</button>
    </section>
  );
}

export default Counter;
