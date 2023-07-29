import React, { useRef, useState } from "react"; 
import { useDispatch } from "react-redux";
import s from '../../../styles/mainInputs.module.css'
import InfoPopup from "../../popups/infoPopup";
import { infoPopups } from "../../../state/popups";

const UnitQuantity = ({project}) => {

    const dispatch = useDispatch()
    const quantityRef = useRef()
    const [visibility, setVisibility] = useState("hidden")

    const setUnitQuantuty = (value) => {
        quantityRef.current.value = value

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
                unitQuantity: value,
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
            <div className={s.name}>Введите объем производства</div>
            <div className={s.rightFlex}>
                <input className={s.inputArea} ref={quantityRef} onChange={event => setUnitQuantuty(event.target.value)}
                 type="number" placeholder="ед./мес." value={project.incomes.unitQuantity || ""}></input>
                <button className={s.button} onClick={() => setUnitQuantuty("")}>СБРОСИТЬ</button>
                <div onClick={() => setVisibility("visible")} className={s.info}>?</div>
            </div>
            <InfoPopup text={infoPopups.unitQuantity} setVisibility={setVisibility} visibility={visibility}/>

        </div>
    )
}
export default UnitQuantity