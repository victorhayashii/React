import style from './Relogio.module.scss';
export default function Relogio(){
    return(
        // <> & </> é uma forma da gente fazer com que o react renderize elementos sem a necessidade de um elemento pai
        <>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        </>
    );
}