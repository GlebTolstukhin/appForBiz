import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import s from "../../styles/dropButton.module.css"
import { ProjectContext } from "./ProjectMain";

const DropButton = ({param}) => {

    const project = useContext(ProjectContext)

    const dispatch = useDispatch()

    function dropParam() {
        let newProject
        if (param === "paybackTime") {
            newProject = {...project}
            newProject.calcs.paybackTime = ""
        }
        else if (param === "unitQuantity") {
            newProject = {...project}
            newProject.incomes.unitQuantity = ""
        }
        else if (param === "variableCosts") {
            newProject = {...project}
            newProject.costs.variableCosts = ""
        }
        else if (param === "unitIncome") {
            newProject = {...project}
            newProject.incomes.unitIncome = ""
        }
        else if (param === "fixedCosts") {
            newProject = {...project}
            newProject.costs.fixedCosts = ""
        }
        else if (param === "initialCosts") {
            newProject = {...project}
            newProject.costs.initialCosts = ""
        }
        else if (param === "margin") {
            newProject = {...project}
            newProject.incomes.margin = ""
        }
        else if (param === "monthIncome") {
            newProject = {...project}
            newProject.incomes.monthIncome = ""
        }
        else if (param === "unitProfit") {
            newProject = {...project}
            newProject.incomes.unitProfit = ""
        }
        dispatch({type: "SET_UPDATED_PROJECT", payload: {value: newProject, id: project.id}})
    }



    return (
    <button className={s.dropButton} onClick={dropParam}>СБРОСИТЬ</button>
    )
}
export default DropButton