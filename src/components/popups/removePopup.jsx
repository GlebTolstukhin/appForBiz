import React from "react";
import s from '../../styles/removePopup.module.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const RemovePopup = ({setVisibility, visibility, project}) => {

    const dispatch = useDispatch()
    const toList = useNavigate()

    const keyDown = (event) => {
        if (event.key === "Escape" || event.key === "Backspace") {
            setVisibility("hidden")
        }
    }
    window.addEventListener('keydown', keyDown)


    function remove(value) {
        dispatch({type: "DELETE_PROJECT", payload: value})
        setVisibility("hidden")
        toList("/")
    }

    return (
        

        <div style={{visibility: `${visibility}`}} className={s.infoPopup}>
            <div className={s.popupInner}>
                Вы уверены, что хотите удалить проект? Восстановить его будет невозможно.
                <div className={s.buttons}>
                    <button className={s.removeButton} onClick={() => remove(project.id)}>ДА</button>
                    <button onClick={()=> setVisibility("hidden")} className={s.closePopup}>НЕТ</button>
                </div>
                
            </div>
        </div>
    )
}

export default RemovePopup