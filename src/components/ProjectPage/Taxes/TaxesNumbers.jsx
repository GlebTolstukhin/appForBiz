import React from "react";
import s from "../../../styles/projectMain.module.css"

const TaxesNumbers = ({taxes}) => {

    let type 
    let size
        if(taxes.type === "six" && !!taxes.size) {
            type = "\"От доходов\""
            size = `${taxes.size} %`
        }
        if(taxes.type === "fifteen" && !!taxes.size) {
            type = "\"Доходы минуc расходы\""
            size = `${taxes.size} %`
        }
        if(taxes.type === "patent" && !!taxes.size) {
            type = "\"Патент\""
            size = `${taxes.size} руб./мес.`
        }
    

    return (
        <div >
            {type ? <div>Налогообложение:</div> : <div>Тип налога не выбран</div>}
            {type ? <div>&nbsp;&nbsp;&nbsp;&nbsp;Тип: <span className={s.green}>{type}</span></div> : ""}
            {size ? <div>&nbsp;&nbsp;&nbsp;&nbsp;Размер: <span className={s.green}>{size}</span></div> : ""}
        </div>
    )
}
export default TaxesNumbers