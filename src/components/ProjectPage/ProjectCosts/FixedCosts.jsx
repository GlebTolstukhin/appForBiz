import React, { useState} from "react";
import { useDispatch } from "react-redux";
import s from '../../../styles/mainInputs.module.css'
import InfoPopup from "../../popups/infoPopup";
import { infoPopups } from "../../../state/popups";

const FixedCosts = ({project}) => {

    const dispatch = useDispatch()
    
    const [visibility, setVisibility] = useState("hidden")

    const setFixedCosts = (value) => {

        let newProject = {
            id: project.id,
            title: project.title,
            description: project.description,
            done: project.done,
            costs: {
                initialCosts: project.costs.initialCosts,
                fixedCosts : value,
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
            <div className={s.name}>Введите постоянные издержки</div>
            <div className={s.rightFlex}>
                <input className={s.inputArea} onChange={event => setFixedCosts(event.target.value.replace(/[^0-9,.]/g,"").replace(/([,.]+)\1/g, ".").replace(",", "."))}
                 type="text" placeholder="₽" value={!project.costs.fixedCosts ?  "" : String(project.costs.fixedCosts).replace(",", ".")}></input>
                <button className={s.button} onClick={() => setFixedCosts("")}>СБРОСИТЬ</button>
                <div onClick={() => setVisibility("visible")} className={s.info}>?</div>
            </div>
            <InfoPopup text={infoPopups.fixedCosts} setVisibility={setVisibility} visibility={visibility}/>
            
        </div>
    )
}
export default FixedCosts