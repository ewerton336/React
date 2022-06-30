import React from "react";
import style from "./BotaoComProps.module.scss";
class BotaoComProps extends React.Component<{ texto: string; valor: number }> {
  render() {
    return (
      <div>
        <button className={style.botao}>{this.props.texto}</button>
      </div>
    );
  }
}

export default BotaoComProps;
