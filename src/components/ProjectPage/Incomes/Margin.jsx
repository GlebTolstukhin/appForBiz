import React, {useState } from "react";
import { useDispatch } from "react-redux";
import s from '../../../styles/mainInputs.module.css'
import InfoPopup from "../../popups/infoPopup";
import { infoPopups } from "../../../state/popups";

const Margin = ({project}) => {

    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState("hidden")

    const setMargin = (value) => {

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
                margin: value,
                unitIncome: project.incomes.unitIncome,
                unitQuantity: project.incomes.unitQuantity,
                monthIncome: project.incomes.monthIncome,
                unitProfit: project.incomes.unitProfit,
            },
            calcs: {
                paybackTime: project.calcs.paybackTime,
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
            <div className={s.name}>Введите маржу</div>
            <div className={s.rightFlex}>
                <input className={s.inputArea} onChange={event => setMargin(event.target.value.replace(/[^0-9,.]/g,"").replace(/([,.]+)\1/g, ".").replace(",", "."))}
                 type="text" placeholder="₽" value={!project.incomes.margin ?  "" : String(project.incomes.margin).replace(",", ".")  }></input>
                <button className={s.button} onClick={() => setMargin("")}>СБРОСИТЬ</button>
                <div onClick={() => setVisibility("visible")} className={s.info}>?</div>
            </div>
            <InfoPopup text={infoPopups.margin} setVisibility={setVisibility} visibility={visibility}/>

        </div>
    )
}
export default Margin