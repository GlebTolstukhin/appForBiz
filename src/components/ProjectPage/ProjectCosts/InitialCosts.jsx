import React, {useState} from "react";
import { useDispatch } from "react-redux";
import s from '../../../styles/mainInputs.module.css'
import { infoPopups } from "../../../state/popups";
import InfoPopup from "../../popups/infoPopup";

const InitialCosts = ({project}) => {

    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState("hidden")


    const setInitialCosts = (value) => {

        let newProject = {
            id: project.id,
            title: project.title,
            description: project.description,
            done: project.done,
            costs: {
                initialCosts: value,
                fixedCosts: project.costs.fixedCosts,
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
                <div className={s.name}>Введите начальные затраты</div>
                <div className={s.rightFlex}>
                    <input className={s.inputArea} onChange={event => setInitialCosts(event.target.value.replace(/[^0-9,.]/g,"").replace(/([,.]+)\1/g, ".").replace(",", "."))}
                     type="text" placeholder="₽" value={!project.costs.initialCosts ?  "" : String(project.costs.initialCosts).replace(",", ".")}></input>
                    <button className={s.button} onClick={() => setInitialCosts("")}>СБРОСИТЬ</button>
                    <div onClick={() => setVisibility("visible")} className={s.info}>?</div>
                </div>
                <InfoPopup text={infoPopups.initialCosts} setVisibility={setVisibility} visibility={visibility}/>
            </div> 
    )
}
export default InitialCosts