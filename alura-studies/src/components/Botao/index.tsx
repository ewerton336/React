import React from "react";
import style from "./Botao.module.scss";
class Botao extends React.Component<any, any> {
  render() {
    return (
      <div>
        <button className={style.botao}>{this.props.children}</button>
      </div>
    );
  }
}

export default Botao;
