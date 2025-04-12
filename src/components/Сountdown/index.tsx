import { useRef, useState } from "react";
import style from "./Сountdown.module.css";

interface props {
  timeStart: number;
  timeEnd: number;
}

function TimerGameToString(h: number, m: number, s: number): string {
  return `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${s > 9 ? s : "0" + s}`;
}

function Countdown({ timeStart, timeEnd }: props) {
  const [TimerFlag, setTimerFlag] = useState<boolean>(false);
  const [TimerStart, setTimerStart] = useState<Date>(new Date());
  const [TimerStop, setTimerStop] = useState<Date>(new Date());
  const [TimerCooldown, setTimerCooldown] = useState<number>(timeStart);
  const setInteral = useRef<number | null>(null);
  // setInterval(() => {
  //   console.log(1);
  // }, 1000)

  const TimerGameStart = () => {
    let counter = TimerCooldown;
    if (!TimerFlag) {
      setInteral.current = window.setInterval(() => {
        if (counter < timeEnd) {
          counter++;
          setTimerCooldown((TimerCooldown) => TimerCooldown + 1);
        } else if (setInteral.current) {
          setTimerFlag(false);
          setTimerStop(new Date());
          clearInterval(setInteral.current);
        }
      }, 1000);

      setTimerStart(new Date());
      setTimerFlag(true);
    }
  };

  const TimerGamePause = () => {
    if (TimerFlag && setInteral.current) {
      setTimerFlag(false);
      setTimerStop(new Date());
      clearInterval(setInteral.current);
    }
  };

  const TimerGameClear = () => {
    if (setInteral.current) {
      setTimerFlag(false);
      setTimerStart(new Date());
      setTimerStop(new Date());
      setTimerCooldown(timeStart);
      clearInterval(setInteral.current);
    }
  };

  return (
    <section className={style.body}>
      <p className={style.condition}>
        Создайте компонент Countdown, который запускает при инициализации
        обратный отсчёт, начиная от 10 до 0. При достижении 10 — отображает
        сообщение “End Game”.
        <br />
        <br />
        Усложнение: дополнить компонент “пропсом”, который позволит задавать
        начальное число, от которого начинается отсчёт
        <br />
        <br />
        Усложнение x2: реализовать возможность инициализации стартового отсчёта
        не числом, a временем в формате HH:MM:SS
        <br />
        <br />
        Усложнение x3: добавить управляющие эл-ты для полной конфигурации
        компонента: a. сброс отсчёта b. Пауза c. Старт
      </p>

      <p>
        Старт:
        {TimerGameToString(
          TimerStart.getHours(),
          TimerStart.getMinutes(),
          TimerStart.getSeconds()
        )}
      </p>
      <p>
        Прошло: ({timeStart}c / {timeEnd}c - {TimerCooldown}c)
      </p>
      <p>
        Стоп:
        {TimerGameToString(
          TimerStop.getHours(),
          TimerStop.getMinutes(),
          TimerStop.getSeconds()
        )}
      </p>

      <button onClick={() => TimerGameStart()}>старт</button>
      <button onClick={() => TimerGamePause()}>пауза</button>
      <button onClick={() => TimerGameClear()}>сброс</button>
    </section>
  );
}
export default Countdown;
