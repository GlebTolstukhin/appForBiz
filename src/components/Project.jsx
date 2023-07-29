import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import s from "../styles/project.module.css"
import RemovePopup from "./popups/removePopup";

const Project = ({project}) => {

    const [isDone, setDone] = useState(project.done)
    const [removeVisible, setRemoveVisible] = useState("hidden")
    const toProject = useNavigate()
    

    return (
        <div className={s.container}>
            <div className={s.title}>{project.title}</div>
            <div className={s.rightFlex}>
                <button className={s.removeProject} onClick={() => setRemoveVisible("visible")}>УДАЛИТЬ ПРОЕКТ</button>
                <RemovePopup visibility={removeVisible} project={project} setVisibility={setRemoveVisible}/>
                <button className={s.toProject} onClick={() => toProject(`/project${project.id}`)}>К ПРОЕКТУ</button>
                <div className={s.completed}>Реализовано:</div> 
                <input className={s.isDone} type="checkbox" checked={isDone} onChange={() => setDone(!isDone)}/>
            </div>
        </div>
    )
}
export default Project