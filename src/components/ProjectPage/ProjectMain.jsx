import React, { createContext, useState } from "react";
import { NavLink} from "react-router-dom";
import ProjectCosts from "./ProjectCosts";
import ProjectIncomes from "./ProjectIncomes";
import Calcs from "./Calcs/Calcs";
import TaxesType from "./Taxes/TaxesType";
import s from "./../../styles/projectMain.module.css"
import InstuctionPopup from "../popups/InstructionPopup";
import TaxesNumbers from "./Taxes/TaxesNumbers";
import Review from "./Review";
import RemovePopup from "../popups/removePopup";
import DropButton from "./DropButton";
import RenamePopup from "../popups/renamePopup";
import OutputRow from "./OutputRow";


export const ProjectContext = createContext()


const ProjectMain = ({project}) => {



    const [review, setReview] = useState(false)
    const [visibility, setVisibility] = useState("hidden")
    const [removeVisible, setRemoveVisible] = useState("hidden")
    const [buttonVisible, setButtonVisible] = useState("visible")
    const [renameVisible, setRenameVisible] = useState("hidden")
    function openReview() {
        setButtonVisible("hidden")
        setReview(true)
    }

    return (
        <ProjectContext.Provider value={project}>
        <div className={s.project}>
            <button onClick={() => setVisibility("visible")} className={s.instructionButton}>КАК ПОЛЬЗОВАТЬСЯ ПРИЛОЖЕНИЕМ?</button>
            <button onClick={() => setRenameVisible("visible")} className={s.renameButton}>ПЕРЕИМЕНОВАТЬ ПРОЕКТ</button>
            <div className={s.title}>{project.title}</div>
            <h2 className={s.aboutDescription}>Концепт моего проекта:</h2>
            <div className={s.description}>{project.description}</div>
            <h2 className={s.sectionName}>Цифры проекта:</h2>
            <RenamePopup project={project} visibility={renameVisible}  setVisibility={setRenameVisible}/>
            <InstuctionPopup visibility={visibility} setVisibility={setVisibility}/>
            <div className={s.projectNumbers}>
            Изначальные затраты:  
                {/* {project.costs.initialCosts === undefined || project.costs.initialCosts === "" 
                ? <span className={s.red}> не заданы.</span> : <span>:<span className={s.green}> {project.costs.initialCosts} руб.</span></span>  }
                    <DropButton param={"initialCosts"} project={project}/> */}
                <OutputRow param={"initialCosts"} project={project} variable={project.costs.initialCosts} text={"руб."} />
            </div>
            <div className={s.projectNumbers}>
            Постоянные издержки: 
                {/* {project.costs.fixedCosts === undefined || project.costs.fixedCosts === "" ? 
                <span className={s.red}> не заданы.</span> :<span>: <span className={s.green}>{project.costs.fixedCosts} руб.</span></span> }
                    <DropButton param={"fixedCosts"} project={project}/> */}
                <OutputRow param={"fixedCosts"} project={project} variable={project.costs.fixedCosts} text={"руб."} />
            </div>
            <div className={s.projectNumbers}>
            Переменные издержки: 
                {/* {project.costs.variableCosts === undefined || project.costs.variableCosts === "" 
                ? <span className={s.red}> не заданы.</span> : <span>: <span className={s.green}>{project.costs.variableCosts} руб.</span></span> } 
                    <DropButton param={"variableCosts"} project={project}/> */}
                <OutputRow param={"variableCosts"} project={project} variable={project.costs.variableCosts} text={"руб."} />
               
            </div>
            <div className={s.projectNumbers}>
            Цена реализации единицы товара/услуги: 
                {/* {project.incomes.unitIncome === undefined || project.incomes.unitIncome === ""  ?
                <span className={s.red}> не задана.</span> : <span>: <span className={s.green}>{project.incomes.unitIncome} руб.</span></span> }
                    <DropButton param={"unitIncome"} project={project}/> */}
                <OutputRow param={"unitIncome"} project={project} variable={project.incomes.unitIncome} text={"руб."} />
                
            </div>
            <div className={s.projectNumbers}>
            Маржа:
                {/* {project.incomes.margin === undefined || project.incomes.margin === ""  ?
                <span className={s.red}> не задана.</span >: <span>: <span className={s.green}>{project.incomes.margin} руб.</span></span> }
                    <DropButton param={"margin"} project={project}/> */}
                <OutputRow param={"margin"} project={project} variable={project.incomes.margin} text={"руб."} />
                    
            </div>
            <div className={s.projectNumbers}>
            Прибыль от единицы продукции: 
                <OutputRow param={"unitProfit"} project={project} variable={project.incomes.unitProfit} text={"руб."} />
            </div>
            <div className={s.projectNumbers}>
            Объем производства: 
                {/* {project.incomes.unitQuantity === undefined || project.incomes.unitQuantity === ""  ?
                <span className={s.red}> не задан.</span>:<span>: <span className={s.green}>{project.incomes.unitQuantity} ед./мес.</span></span> }
                    <DropButton param={"unitQuantity"} project={project}/> */}
                <OutputRow param={"unitQuantity"} project={project} variable={project.incomes.unitQuantity} text={"ед./мес."} />
                
            </div>

            <span className={s.littleInfo}>Не вводится польователем, а рассчитывается приложением исходя из введенных данных.</span> 
            <div className={s.projectNumbers}>
            Ежемесячная прибыль: 
                {/* {project.incomes.monthIncome === undefined || project.incomes.monthIncome === ""  ?
                <span className={s.red}> не задана.</span>:<span>: <span className={s.green}>{project.incomes.monthIncome} руб.</span></span> }
                    <DropButton param={"monthIncome"} project={project}/> */}
                <OutputRow param={"monthIncome"} project={project} variable={project.incomes.monthIncome} text={"руб./мес."} />
            </div>

            <div className={s.projectNumbers}>
            Ожидаемое время окупаемости: 
                {project.calcs.paybackTime === undefined  || project.calcs.paybackTime === "" ? 
                   <span className={s.red}> нет данных.</span>  :
                    project.calcs.paybackTime <= 0 || project.calcs.paybackTime === Infinity ? 
                    <span className={s.green}> &nbsp; никогда. <br /></span>     
                    : <span>&nbsp; <span className={s.green}>{project.calcs.paybackTime} мес. <br /></span></span>}
                    <DropButton param={"paybackTime"} project={project}/>
            </div>
            <div className={s.projectNumbers}>
                {project.taxes.type !== undefined && project.taxes.size !== undefined ? <TaxesNumbers  taxes={project.taxes}/> : <span>Тип налога <span className={s.red}>не выбран</span></span>}
            </div>
  
            <h2 className={s.sectionName}>Исходные данные:</h2>
            <ProjectCosts project={project}/>
            <ProjectIncomes project={project}/>
            <TaxesType project={project}/>
            <Calcs project={project}/>
            <button style={{visibility: `${buttonVisible}`}} onClick={openReview} className={s.calcButton}>ПОЛУЧИТЬ РЕВЬЮ</button>
            {review ? <Review setButtonVisible={setButtonVisible} setReview={setReview} project={project}/> : ""}
            <div className={s.buttonFlex}>
                <NavLink className={s.backButton} to={"/"}>К СПИСКУ ПРОЕКТОВ</NavLink>
                <button className={s.removeButton} onClick={()=> setRemoveVisible("visible")}>УДАЛИТЬ ПРОЕКТ</button>
                <RemovePopup visibility={removeVisible} project={project} setVisibility={setRemoveVisible}/>
            </div>
            
        </div>
        </ProjectContext.Provider>
    )
}
export default ProjectMain