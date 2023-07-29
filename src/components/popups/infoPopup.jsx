import React from "react";
import s from '../../styles/mainInputs.module.css'


const InfoPopup = ({text, setVisibility, visibility}) => {
 
    const keyDown = (event) => {
            if (event.key === "Escape" || event.key === "Backspace") {
                setVisibility("hidden")
            }
    }

    window.addEventListener('keydown', keyDown)

    
    

    return (
        

        <div style={{visibility: `${visibility}`}} className={s.infoPopup}>
            <div className={s.popupInner}>
                {text}
                <button onClick={()=> setVisibility("hidden")} className={s.closePopup}>ЗАКРЫТЬ</button>
            </div>
        </div>
    )
}

export default InfoPopup