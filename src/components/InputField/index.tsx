import { useState } from "react";
import style from "./InputField.module.css";

function InputField() {
  const [Text, setText] = useState<string>("");
  return (
    <section className={style.body}>
      <p className={style.condition}>
        3. Создайте компонент InputField, который содержит поле ввода и
        отображает значение введенного текста ниже. Используйте useState для
        хранения значения текста. При изменении содержимого поля ввода значение
        должно обновляться и отображаться ниже.
        <br />
        <br />
        Усложнение: текст должен отображаться ещё и в title вкладки/страницы
      </p>

      <input
        type="text"
        placeholder="text"
        value={Text}
        onChange={(e) => {
          setText(e.target.value);
          document.title = e.target.value;
        }}
      />
      <p>Текс {Text}</p>
    </section>
  );
}

export default InputField;
