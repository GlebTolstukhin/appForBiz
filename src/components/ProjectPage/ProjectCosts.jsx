import React from "react";
import InitialCosts from "./ProjectCosts/InitialCosts";
import FixedCosts from "./ProjectCosts/FixedCosts";
import VariableCosts from "./ProjectCosts/VariableCosts";

const ProjectCosts = ({project}) => {

    return (
        <div>
            <div>
                <InitialCosts project={project}/>
                <FixedCosts project={project}/>
                <VariableCosts project={project}/>
            </div>         
        </div>
    )
}

export default ProjectCosts