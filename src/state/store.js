import {createStore} from 'redux'


const defaultState = {
    projects: [{id: 1, title: "Мой проект", description: "Краткое описание моего проекта", done: false,
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
                },
                calcs: {
                    paybackTime: "",
                },
                taxes: {
                    type: "",
                    size: "",
                }
            }]
}
const reduser = (state = JSON.parse(localStorage.getItem("projects")) || defaultState, action) => {
    switch (action.type) {
            case "ADD_PROJECT":
                localStorage.setItem("projects", JSON.stringify({...state, projects: [...state.projects, action.payload]}))
                return JSON.parse(localStorage.getItem("projects"))
            case "DELETE_PROJECT":
                localStorage.setItem("projects", JSON.stringify({...state, projects: [...state.projects.filter(project => project.id !== action.payload)]}))
                return JSON.parse(localStorage.getItem("projects"))
            case "SET_UPDATED_PROJECT": 
            localStorage.setItem("projects", JSON.stringify({...state, projects: [...state.projects.filter(project => project.id !== action.payload.id), action.payload.value]}))          
                return JSON.parse(localStorage.getItem("projects"))
            default:
                return state
    }
}

export const store = createStore(reduser)