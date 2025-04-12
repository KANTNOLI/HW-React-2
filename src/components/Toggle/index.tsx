import { useState } from "react";
import style from "./Toggle.module.css";

function setStyleState(
  setFunc: (setValue: boolean) => void,
  value: boolean,
  event: React.MouseEvent
): void {
    console.log(event.button);
    
  // сделал не лкм и пкм а с учетом ctrl
  if (event.ctrlKey) {
    setFunc(false);
  } else {
    setFunc(true);
  }
}

function Toggle() {
  const [ToggleStyle, setToggleStyle] = useState<boolean>(true);

  return (
    <section className={style.body}>
      {ToggleStyle && (
        <p className={style.condition}>
          2. Создайте компонент Toggle, который отображает кнопку
          "Включить/Выключить". Используйте useState для хранения состояния
          переключателя. При нажатии на кнопку состояние должно меняться между
          true и false, а текст на кнопке должен соответствующим образом
          отображаться/скрываться.
          <br />
          <br />
          Усложнение: сделайте так, чтобы отключить кнопку можно было только
          правой клавишей мыши, а включить только левой клавишей мыши
        </p>
      )}

      <button
        onClick={(event: React.MouseEvent) =>
          setStyleState(setToggleStyle, ToggleStyle, event)
        }
      >
       CTRL + RC / RC
      </button>
    </section>
  );
}

export default Toggle;
