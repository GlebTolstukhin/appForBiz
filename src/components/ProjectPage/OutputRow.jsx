import React from "react";
import s from "./../../styles/projectMain.module.css"
import DropButton from "./DropButton";


export default React.memo(function OutputRow({param, variable, text}) {
    
    return (
        <div className={s.flex}>
            {variable === undefined || variable === "" ? 
        <span className={s.red}> нет данных.</span> :<span> &nbsp;<span className={s.green}>{variable} {text}</span></span> }
            <DropButton param={param}/>
        </div>
    )
}, arePropsEqual)

function arePropsEqual(prev, next) {
    if (prev.variable === next.variable) {
        return true
    } else return false
}
