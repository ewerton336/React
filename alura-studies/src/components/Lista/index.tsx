import Item from "./item";
import style from "./Lista.module.scss";

function Lista() {
  const tarefas = [
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
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia</h2>
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
