import React from "react";
import { useDispatch } from "react-redux";
import s from "../../../styles/projectMain.module.css"

const Calcs = ({project}) => {

    const dispatch = useDispatch()

    const calcAll = (project) => {
        
        if (project.calcs.paybackTime ==="" || project.calcs.paybackTime === undefined) {
            let payback
            if (project.costs.initialCosts !== "" && project.costs.fixedCosts !== ""
                && project.costs.variableCosts !== "" && project.incomes.unitIncome
                !== "" && project.incomes.unitQuantity !== "" && project.taxes.type !== "" && project.taxes.size !== "") {
                    if (project.taxes.type === "six") {
                            payback = Math.trunc((Number(project.costs.initialCosts) / ((project.incomes.unitIncome * (1 - project.taxes.size * 0.01) -
                            project.costs.variableCosts ) * project.incomes.unitQuantity - project.costs.fixedCosts)) * 1000) / 1000
                        }
                    if (project.taxes.type === "fifteen") {
                            payback = Math.trunc((Number(project.costs.initialCosts) / (((project.incomes.unitIncome - project.costs.variableCosts) * 
                            project.incomes.unitQuantity - project.costs.fixedCosts) * (1 - project.taxes.size * 0.01)) ) * 1000 ) / 1000
                        }
                    if (project.taxes.type === "patent") {
                            payback = Math.trunc(((Number(project.costs.initialCosts) ) / ((project.incomes.unitIncome - project.costs.variableCosts)
                            * project.incomes.unitQuantity - project.costs.fixedCosts - Number(project.taxes.size))) * 1000) / 1000
                           
                        } 
                    if (isNaN(payback) ) {
                        payback = 0
                    }
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
                        unitProfit: project.incomes.unitPrifit,
                    },
                    calcs: {
                        paybackTime: payback,
                    },
                    taxes: {
                        type: project.taxes.type,
                        size: project.taxes.size,
                    }
                }
            dispatch({type: "SET_UPDATED_PROJECT", payload: {value: newProject, id: project.id}})  
            if (newProject !== project) {
                calcAll(newProject)
            }
            
            }
            else if (project.costs.initialCosts !== "" && project.incomes.monthIncome !== "") {
                payback = Math.trunc((project.costs.initialCosts / project.incomes.monthIncome) * 1000) / 1000

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
                    },
                    calcs: {
                        paybackTime: payback,
                    },
                    taxes: {
                        type: project.taxes.type,
                        size: project.taxes.size,
                    }
                }
            dispatch({type: "SET_UPDATED_PROJECT", payload: {value: newProject, id: project.id}})  
            if (newProject !== project) {
                calcAll(newProject)
            }
            }
        }
        if (project.incomes.unitQuantity ==="" || project.incomes.unitQuantity === undefined) {
            let unitQuantity
            if (project.costs.initialCosts !== "" && project.costs.fixedCosts !== ""
                && project.costs.variableCosts !== "" && project.incomes.unitIncome
                !== "" && project.calcs.paybackTime !== "") {

                    if (project.taxes.type === "six") {
                        unitQuantity = Math.trunc(((Number(project.costs.initialCosts) + project.costs.fixedCosts * project.calcs.paybackTime) 
                        / (project.incomes.unitIncome * (1 - project.taxes.size * 0.01) 
                        - project.costs.variableCosts) / project.calcs.paybackTime) * 1000) / 1000
                        
                        
                    }
                    if (project.taxes.type === "fifteen") {
                        unitQuantity = Math.trunc(((Number(project.costs.initialCosts) + project.costs.fixedCosts * project.calcs.paybackTime)
                         / ((project.incomes.unitIncome - project.costs.variableCosts)
                          * (1 - project.taxes.size * 0.01)) / project.calcs.paybackTime) * 1000) / 1000
                        
                    }
                    if (project.taxes.type === "patent") {
                        unitQuantity = Math.trunc(((Number(project.costs.initialCosts) + project.costs.fixedCosts * project.calcs.paybackTime 
                        + project.taxes.size * project.calcs.paybackTime)  / (project.incomes.unitIncome - project.costs.variableCosts)
                         / project.calcs.paybackTime) * 1000) / 1000
                       
                    }
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
                        unitQuantity: unitQuantity,
                        monthIncome: project.incomes.monthIncome,
                        unitProfit: project.incomes.unitPrifit,
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
            if (newProject !== project) {
                calcAll(newProject)
            }
            }
            if (project.incomes.monthIncome !== "" && project.costs.fixedCosts !== ""
            && project.costs.variableCosts !== "" && project.incomes.unitIncome !== "") {
                if (project.taxes.type === "six") {
                    unitQuantity = Math.trunc(((Number(project.incomes.monthIncome) + Number(project.costs.fixedCosts)) /
                     (project.incomes.unitIncome * (1 - project.taxes.size * 0.01) -  project.costs.variableCosts )) * 1000) / 1000
                    
                }
                if (project.taxes.type === "fifteen") {
                    unitQuantity = Math.trunc(((Number(project.incomes.monthIncome) + Number(project.costs.fixedCosts)) /
                     (project.incomes.unitIncome - project.costs.variableCosts )* (1 - project.taxes.size * 0.01)) * 1000) / 1000
                    
                }
                if (project.taxes.type === "patent") {
                    unitQuantity = Math.trunc(((Number(project.incomes.monthIncome) + Number(project.costs.fixedCosts) + Number(project.taxes.size)) /
                     (project.incomes.unitIncome - project.costs.variableCosts )) * 1000) / 1000
                    
                }
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
                    unitQuantity: unitQuantity,
                    monthIncome: project.incomes.monthIncome,
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
        if (newProject !== project) {
            calcAll(newProject)
        }
            }
        }
        if (project.incomes.unitIncome ==="" || project.incomes.unitIncome === undefined) {
            let unitIncome

            if (project.costs.variableCosts !== "" && project.incomes.margin !== "" ) {
                unitIncome = (Number(project.costs.variableCosts) ) + Number(project.incomes.margin)
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
                        unitIncome: unitIncome,
                        unitQuantity: project.incomes.unitQuantity,
                        monthIncome: project.incomes.monthIncome,
                        unitProfit: project.incomes.unitPrifit,
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
            if (newProject !== project) {
                calcAll(newProject)
            } 
            }
            // if (project.incomes.monthIncome !== "" && project.incomes.unitQuantity !== "" && project.costs.variableCosts !== "" &&
            //  project.costs.fixedCosts !== "" && project.taxes.type !== "" ) {
            //     if (project.taxes.type === "six") {
            //         unitIncome = Math.trunc((Number(project.incomes.monthIncome) + Number(project.costs.fixedCosts)) / project. )
            //     }
            //     let newProject = {
            //         id: project.id,
            //         title: project.title,
            //         description: project.description,
            //         done: project.done,
            //         costs: {
            //             initialCosts: project.costs.initialCosts,
            //             fixedCosts : project.costs.fixedCosts,
            //             variableCosts: project.costs.variableCosts,
            //         },
            //         incomes: {
            //             margin: project.incomes.margin,
            //             unitIncome: unitIncome,
            //             unitQuantity: project.incomes.unitQuantity,
            //             monthIncome: project.incomes.monthIncome,
            //         },
            //         calcs: {
            //             paybackTime: project.calcs.paybackTime,
            //         },
            //         taxes: {
            //             type: project.taxes.type,
            //             size: project.taxes.size,
            //         }
            //     }
            // dispatch({type: "SET_UPDATED_PROJECT", payload: {value: newProject, id: project.id}})
            // if (newProject !== project) {
            //     calcAll(newProject)
            // } 
            // }
        }
        if (project.incomes.margin ==="" || project.incomes.margin === undefined) {
            let margin

            if (project.costs.variableCosts !== "" && project.incomes.unitIncome !== "" ) {
                margin = Math.trunc((project.incomes.unitIncome - (Number(project.costs.variableCosts))) * 1000) /1000
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
                        margin: margin,
                        unitIncome: project.incomes.unitIncome,
                        unitQuantity: project.incomes.unitQuantity,
                        monthIncome: project.incomes.monthIncome,
                        unitProfit: project.incomes.unitPrifit,
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
            if (newProject !== project) {
                calcAll(newProject)
            } 
            }
        }
        if (project.costs.initialCosts ==="" || project.costs.initialCosts === undefined) {
            let initialCosts

            if (project.calcs.paybackTime !== ""  && project.costs.fixedCosts !== ""
                && project.costs.variableCosts !== "" && project.incomes.unitIncome
                !== "" && project.incomes.unitQuantity !== "" && project.taxes.type !== "") {
                    if (project.taxes.type === "six") {
                            initialCosts = Math.trunc((Number(project.calcs.paybackTime) * ((project.incomes.unitIncome * (1 - project.taxes.size * 0.01) -
                            project.costs.variableCosts ) * project.incomes.unitQuantity - project.costs.fixedCosts)) * 1000) / 1000
                        }
                    if (project.taxes.type === "fifteen") {
                            initialCosts = Math.trunc((Number(project.calcs.paybackTime) * (((project.incomes.unitIncome - project.costs.variableCosts) * 
                            project.incomes.unitQuantity - project.costs.fixedCosts) * (1 - project.taxes.size * 0.01)) ) * 1000 ) / 1000
                        }
                    if (project.taxes.type === "patent") {
                            initialCosts = Math.trunc((Number(project.calcs.paybackTime) * ((project.incomes.unitIncome - project.costs.variableCosts)
                            * project.incomes.unitQuantity - project.costs.fixedCosts - Number(project.taxes.size))) * 1000) / 1000
                        } 
                let newProject = {
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    done: project.done,
                    costs: {
                        initialCosts: initialCosts,
                        fixedCosts : project.costs.fixedCosts,
                        variableCosts: project.costs.variableCosts,
                    },
                    incomes: {
                        margin: project.incomes.margin,
                        unitIncome: project.incomes.unitIncome,
                        unitQuantity: project.incomes.unitQuantity,
                        monthIncome: project.incomes.monthIncome,
                        unitProfit: project.incomes.unitPrifit,
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
            if (newProject !== project) {
                calcAll(newProject)
            }
            
            }
        }
        if (project.incomes.monthIncome === "" || project.incomes.monthIncome === undefined) {
            let monthIncome
            if ( project.costs.fixedCosts !== "" && project.costs.variableCosts !== "" && project.incomes.unitIncome
                !== "" && project.incomes.unitQuantity !== "" && project.taxes.type !== "") {
                    if (project.taxes.type === "six") {
                            monthIncome = Math.trunc(( (project.incomes.unitQuantity * project.incomes.unitIncome) * (1 - project.taxes.size * 0.01) -
                            (Number(project.costs.fixedCosts)+ project.incomes.unitQuantity * project.costs.variableCosts)) * 1000) / 1000
                        }
                    if (project.taxes.type === "fifteen") {
                            monthIncome = Math.trunc((((project.incomes.unitQuantity * project.incomes.unitIncome)  -
                            (Number(project.costs.fixedCosts)+ project.incomes.unitQuantity * project.costs.variableCosts)) * (1 - project.taxes.size * 0.01)) * 1000) / 1000
                        }
                    if (project.taxes.type === "patent") {
                            monthIncome = Math.trunc(((project.incomes.unitQuantity * project.incomes.unitIncome) -
                            (Number(project.costs.fixedCosts) + Number(project.taxes.size) + project.incomes.unitQuantity * project.costs.variableCosts)) * 1000) / 1000
                        } 
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
                        monthIncome: monthIncome,
                        unitProfit: project.incomes.unitPrifit,
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
            if (newProject !== project) {
                calcAll(newProject)
            }
            
            }
        }
        if (project.incomes.unitProfit === "" || project.incomes.unitProfit === undefined) {
            if (project.costs.variableCosts !== "" && project.costs.fixedCosts !== "" && project.incomes.unitIncome !== "") {
                let unitProfit
                if (project.taxes.type === "six") {
                    unitProfit = Math.trunc((project.incomes.unitIncome * (1 - project.taxes.size * 0.01) -
                    (Number(project.costs.variableCosts) + project.costs.fixedCosts / project.incomes.unitQuantity) ) * 1000) / 1000
                }
                if (project.taxes.type === "fifteen") {
                    unitProfit = Math.trunc((project.incomes.unitIncome  -
                    (Number(project.costs.variableCosts) + project.costs.fixedCosts / project.incomes.unitQuantity)) *
                     (1 - project.taxes.size * 0.01) * 1000) / 1000
                }
                if (project.taxes.type === "patent") {
                    unitProfit = Math.trunc((project.incomes.unitIncome - (Number(project.costs.variableCosts)
                     + Number(project.taxes.size / project.incomes.unitQuantity) + project.costs.fixedCosts / project.incomes.unitQuantity )) * 1000) / 1000
                     console.log(unitProfit)
                } 
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
                        unitProfit: unitProfit,
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
            if (newProject !== project) {
                calcAll(newProject)
            }
            }
        }
        
    }

    return (

        

        <div>
            
            <button className={s.calcButton} onClick={() => calcAll(project)}>РАССЧИТАТЬ, ЧТО ВОЗМОЖНО</button>
        </div>
    )
}

export default Calcs
