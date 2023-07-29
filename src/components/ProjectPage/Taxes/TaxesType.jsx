import React, {useState} from "react";
import { useDispatch } from "react-redux";
import s from "../../../styles/taxesType.module.css"
import InfoPopup from "../../popups/infoPopup.jsx"
import {infoPopups} from "../../../state/popups.js"

const TaxesType = ({project}) => {

    const dispatch = useDispatch()

    const [sixSize, setSixSize] = useState(undefined)
    const [fifteenSize, setFifteenSize] = useState(undefined)
    const [patentSize, setPatentSize] = useState(undefined)
    const [type, setType] = useState()
    const [sixVisibility, setSixVisibility] = useState("hidden")
    const [fifteenVisibility, setFifteenVisibility] = useState("hidden")
    const [patentVisibility, setPatentVisibility] = useState("hidden")


    const setTaxes = () => {
        if (type) {
            let tax
            if (type === "six") {
                tax = {type: type, size: sixSize ? sixSize : undefined}
            }
            if (type === "fifteen") {
                tax = {type: type, size: fifteenSize  ? fifteenSize : undefined}
            }
            if (type === "patent") {
                tax = {type: type, size: patentSize ? patentSize : undefined}
            }

            let newProject = {
                id: project.id,
                title: project.title,
                description: project.description,
                done: project.done,
                costs: {
                    initialCosts: project.costs.initialCosts,
                    fixedCosts: project.costs.fixedCosts,
                    variableCosts: project.costs.variableCosts,
                },
                incomes: {
                    margin: project.incomes.margin,
                    unitIncome: project.incomes.unitIncome,
                    unitQuantity: project.incomes.unitQuantity,
                    monthIncome: project.incomes.monthIncome,
                    unitProfit: project.incomes.unitProfit,
                },
                calcs: {
                    paybackTime: project.calcs.paybackTime,
                },
                taxes: {
                    type: tax.type,
                    size: tax.size,
                }
            }
            dispatch({type: "SET_UPDATED_PROJECT", payload: {value: newProject, id: project.id}})
        }
    }

   

    return (
        <div>
            <div className={s.taxText}>Выберете тип налогообложения и размер налога</div>
            <div className={s.taxFlex}>
                <input className={s.taxTypeInput} onChange={() => setType("six")}  type="radio" id="six_procents" name="taxes"/>
                <label className={s.taxText} htmlFor="six_procents">от доходов
                    <input className={s.taxSizeInput} onChange={(event) => setSixSize(event.target.value)} type="number" placeholder="%"/>

                </label>
                <div  onClick={() => setSixVisibility("visible")} className={s.info}>?</div>

                <InfoPopup text={infoPopups.sixTaxes} setVisibility={setSixVisibility} visibility={sixVisibility}/>

            </div>
            <div className={s.taxFlex}>
                <input className={s.taxTypeInput} onChange={() => setType("fifteen")} type="radio" id="fifteen_procents" name="taxes"/>
                <label className={s.taxText} htmlFor="fifteen_procents">доходы минус расходы
                    <input className={s.taxSizeInput} onChange={(event) => setFifteenSize(event.target.value)} type="number" placeholder="%" />
                </label>
                <div  onClick={() => setFifteenVisibility("visible")} className={s.info}>?</div>

                <InfoPopup text={infoPopups.fifteenTax} setVisibility={setFifteenVisibility} visibility={fifteenVisibility}/>

            </div>
            <div className={s.taxFlex}>
                <input className={s.taxTypeInput} onChange={() => setType("patent")}  type="radio" id="patent" name="taxes"/>
                <label className={s.taxText}  htmlFor="patent">патент
                    <input className={s.taxSizeInput} onChange={(event) => setPatentSize(event.target.value)} type="number" placeholder="руб./мес." />

                </label>
                <div  onClick={() => setPatentVisibility("visible")} className={s.info}>?</div>

                <InfoPopup text={infoPopups.patentTax} setVisibility={setPatentVisibility} visibility={patentVisibility}/>

            </div>
            <button className={s.button} onClick={setTaxes}>Утвердить систему налогообложения</button>
        </div>
    )
}
export default TaxesType