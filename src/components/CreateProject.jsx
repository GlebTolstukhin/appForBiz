import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./../styles/createProject.module.css"
import { useDispatch } from "react-redux";

const CreateProject = () => {

    const dispatch = useDispatch()
    const back = useNavigate()
   
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [disabled, setDisabled] = useState(true)
    
    useEffect(() => {
        if (title === "" || description === ""){
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }
    }, [title, description])
    
    const createProject = () => {
            let newProject = {
                id: Date.now(),
                title: title,
                description: description,
                done: false,
                costs: {
                    initialCosts: "",
                    fixedCosts: "",
                    variableCosts: "",
                },
                incomes: {
                    margin: "",
                    unitIncome: "",
                    unitQuantity: "",
                    monthIncome: "",
                    unitProfit: ""
                },
                calcs: {
                    paybackTime: "",
                },
                taxes: {
                    type: "",
                    size: "",
                }
            }
            dispatch({type: "ADD_PROJECT", payload: newProject })
            setTitle("")
            setDescription("")
            back("/")     
    }

    return (
        <div className={s.component}>  
            <textarea 
                className={s.smallArea} placeholder="НАЗВАНИЕ ПРОЕКТА" 
                onChange={event => setTitle(event.target.value)} value={title}>
            </textarea>
            <textarea 
                className={s.bigArea} placeholder="КРАТКОЕ ОПИСАНИЕ" 
                onChange={event => setDescription(event.target.value)} value={description}>
            </textarea>
            <div className={s.divFlex}>
                <button className={s.createButton} disabled={disabled} onClick={createProject}>СОЗДАТЬ ПРОЕКТ</button>
                <button className={s.backButton} onClick={()=>back("/")}>НАЗАД</button>
            </div>
            
        </div>
    )
}
export default CreateProject
