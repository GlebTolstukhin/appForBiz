import React from "react";
import { initialCosts, margin, paybackTime } from "../../state/reviewes";
import s from "../../styles/review.module.css"

const Review = ({setReview, project, setButtonVisible}) => {

    function closeReview() {
        setReview(false)
        setButtonVisible("visible")
    }

    function getInitialCostsReview(project, initialCosts) {
        if (!project.costs.initialCosts && project.costs.initialCosts !== 0) {
            return ""
        }
        if(project.costs.initialCosts < 200000) {
            return initialCosts.extraSmall
        } 
        if(project.costs.initialCosts < 500000 ) {
            return initialCosts.small
        } 
        if(project.costs.initialCosts < 2000000 ) {
            return initialCosts.medium
        } 
        if(project.costs.initialCosts < 5000000 ) {
            return initialCosts.big
        } 
        if(project.costs.initialCosts >= 5000000 ) {
            return initialCosts.extraBig
        } 
        else return ""
    }
    
    function getMarginReview(project, margin) {
        if (!project.incomes.margin && project.incomes.margin !== 0) {
            return ""
        }
        if(project.incomes.margin < 0) {
            return margin.minus
        }   
        if(project.incomes.unitIncome / project.costs.variableCosts <= 1.1 ){
            return margin.extraSmall
        }
        if(project.incomes.unitIncome / project.costs.variableCosts <= 1.3 ){
            return margin.small
        }
        if(project.incomes.unitIncome / project.costs.variableCosts <= 1.4 ){
            return margin.medium
        }
        if(project.incomes.unitIncome / project.costs.variableCosts <= 1.7 ){
            return margin.big
        }
        else {
            return margin.extraBig
        }

    }   
    function getPaybackTime(project, paybackTime) {
        if(!project.calcs.paybackTime && project.calcs.paybackTime !== 0) {
            return ""
        }
        if (project.calcs.paybackTime <= 0) {
            return paybackTime.never
        }
        if(project.calcs.paybackTime < 9) {
            return paybackTime.extraSmall
        }
        if(project.calcs.paybackTime < 18) {
            return paybackTime.small
        }
        if(project.calcs.paybackTime < 36) {
            return paybackTime.medium
        }
        if(project.calcs.paybackTime < 48) {
            return paybackTime.big
        }
        else return paybackTime.extraBig
        
    }

    return (
        <div className={s.reviewMain}>
            <h2 className={s.reviewTitle}>Ревью по прокету:</h2>
            {getInitialCostsReview(project, initialCosts) ? <div> <span className={s.reviewPoint}>По начальным затратам:</span> {getInitialCostsReview(project, initialCosts)}</div> : ""} <br/>
            {getMarginReview(project, margin) ? <div> <span className={s.reviewPoint}>По марже:</span> {getMarginReview(project, margin)}</div> : ""} <br/>
            {getPaybackTime(project, paybackTime) ? <div> <span className={s.reviewPoint}>По времени окупаемости:</span> {getPaybackTime(project, paybackTime)}</div> : ""} <br/>
            <div>
                <span className={s.reviewPoint}>Важное замечание: </span>
                Наша оценка Вашего проекта не является и не может являться гарантом его целесообразности и потенциальной успешности, а лишь даёт некоторые советы исходя из полученных данных, принимайте решения самостоятельно и действуйте на свой страх и риск. Желам удачи и успехов.
                </div>
            <button className={s.closeButton} onClick={closeReview}>СКРЫТЬ РЕВЬЮ</button>
        </div>
    )
}

export default Review