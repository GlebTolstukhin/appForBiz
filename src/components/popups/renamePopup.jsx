import React, { useState } from "react";
import s from '../../styles/renamePopup.module.css'
import { useDispatch } from "react-redux";


const RenamePopup = ({project, setVisibility, visibility}) => {

    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const dispatch = useDispatch()

    

    function rename() {
        let newProject = {
            id: project.id,
            title: newTitle,
            description: newDescription,
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
        setVisibility("hidden")
        setNewTitle("")
        setNewDescription("")
    }
    const keyDown = (event) => {
        if (event.key === "Escape") {
            setVisibility("hidden")
        }
        if (event.key === "Enter") {
            rename()
        }
    }      

    window.addEventListener('keydown', keyDown)
    return (
        

        <div style={{visibility: `${visibility}`}} className={s.infoPopup}>
            <div className={s.popupInner}>
                <div className={s.text}>Новое название:</div>
                <input className={s.input} type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
                <div className={s.text}>Новое описание:</div>
                <textarea className={s.textArea} type="text" value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
                <br />
                <button onClick={()=> setVisibility("hidden")} className={s.closePopup}>X</button>
                <button onClick={rename} className={s.renameButton}>Переименовать</button>
            </div>
        </div>
    )
}

export default RenamePopup