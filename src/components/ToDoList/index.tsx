import { useState } from "react";
import style from "./ToDoList.module.css";

function ToDoList() {
  const [PlanText, setPlanText] = useState<string>("");
  const [array, setArray] = useState<string[]>([
    "planakjasdkask",
    "planakjasdkask",
  ]);

  return (
    <section className={style.body}>
      <p className={style.condition}>
        4. Создайте приложение для управления списком задач (To-Do List).
        Пользователь должен иметь возможность добавлять новые задачи в
        существующий массив данных. Список задач можно пока отображать в виде
        общей сериализованной строки посредством записи вида
        JSON.stringify(array, null, “\t”)
      </p>

      <p>TODO</p>
      {array.map((plan, id) => (
        <p key={id}>
          {++id}. {plan}
        </p>
      ))}
      <input
        type="text"
        placeholder="plan"
        value={PlanText}
        onChange={(e) => setPlanText(e.target.value)}
      />
      <button
        onClick={() => {
          setArray([...array, PlanText]);

          setPlanText("");
          console.log(123);
        }}
      >
        add
      </button>
    </section>
  );
}

export default ToDoList;
