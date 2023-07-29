import React from "react";
import UnitIncome from "./Incomes/UnitIncome";
import UnitQuantity from "./Incomes/UnitQuantity";
import Margin from "./Incomes/Margin";
import PaybackTime from "./Incomes/PaybackTime";
import MonthIncome from "./Incomes/MonthIncome";

const ProjectIncomes = ({project}) => {
    return (
        <div>
            <div>
                <UnitIncome project={project}/>
                <Margin project={project}/>
                <UnitQuantity project={project}/>
                <MonthIncome project={project}/>
                <PaybackTime project={project}/>
            </div>
        </div>
    )
}
export default ProjectIncomes