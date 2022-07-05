import { useState } from "react";
import Item from "./item";
import style from "./Lista.module.scss";

function Lista() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    },
  ]);
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          // console.log("h2 clicado", tarefas);
          setTarefas([
            //obtém o valor de tarefas e acrescenta estudar estado
            ...tarefas,
            { tarefa: "Estudar estado", tempo: "05:00:00" },
          ]);
        }}
      >
        {" "}
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item) => (
          //OBTER TODAS AS PROPS DELE
          <Item {...item} />
          //  OU <Item tarefa={item.tarefa} tempo={item.tempo} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
