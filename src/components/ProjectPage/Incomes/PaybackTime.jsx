import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import s from '../../../styles/mainInputs.module.css'
import InfoPopup from "../../popups/infoPopup";
import { infoPopups } from "../../../state/popups";

const PaybackTime = ({project}) => {

    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState("hidden")

    const setPaybackTime = (value) => {
       
        let newProject = {
            id: project.id,
            title: project.title,
            description: project.description,
            done: project.done,
            costs: {
                initialCosts: project.costs.initialCosts,
                fixedCosts : project.costs.fixedCosts,
                variableCosts: project.costs.variableCosts,
            },
            incomes: {
                margin: project.incomes.margin,
                unitIncome: project.incomes.unitIncome,
                unitQuantity: project.incomes.unitQuantity,
                monthIncome: project.incomes.monthIncome,
                unitProfit: project.incomes.unitProfit,
            },
            calcs: {
                paybackTime: value,
            },
            taxes: {
                type: project.taxes.type,
                size: project.taxes.size,
            }
        }
        dispatch({type: "SET_UPDATED_PROJECT", payload: {value: newProject, id: project.id}})
    }

    return (
        <div className={s.inputWrapper}>
            <div className={s.name}>Введите время окупаемости</div>
            <div className={s.rightFlex}>
                <input className={s.inputArea}onChange={event => setPaybackTime(event.target.value.replace(/[^0-9,.]/g,"").replace(/([,.]+)\1/g, ".").replace(",", "."))} 
                type="text" placeholder="мес." value={!project.calcs.paybackTime ?  "" : project.calcs.paybackTime <0 ? "" : String(project.calcs.paybackTime).replace(",", ".")  }></input>
                <button className={s.button} onClick={() => setPaybackTime("")}>СБРОСИТЬ</button>
                <div onClick={() => setVisibility("visible")} className={s.info}>?</div>
            </div>
            <InfoPopup text={infoPopups.paybackTime} setVisibility={setVisibility} visibility={visibility}/>

        </div>
    )
}
export default PaybackTime