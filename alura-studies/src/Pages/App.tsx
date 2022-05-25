import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from "./app.module.scss";
function App() {
  return (
    // {style.AppStyle} como estamos usando o  CSS Modules, a className é passado como se fosse uma propriedade
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
