//importacao da Biblioteca React
import React from "react";
import style from './botao.module.scss';

//React.Component<{texto : string}> => voce define para o typescript que voce esta esperando uma prop e define o tipo dela
class Botao extends React.Component <any,any>{
    
    render() {
        return (
            <button className={style.botao}>
            {this.props.children}
          </button>
        );
    }
}

export default Botao;
