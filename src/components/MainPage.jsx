import Project from './Project';
import { NavLink } from 'react-router-dom';
import s from "../styles/mainPage.module.css"


function MainPage({projects}) {

  return (
    <div >
        {projects ? projects.map(project =><Project key={project.id} project={project} />) : ""}
        <NavLink className={s.createButton} to={"/createPage"}>ДОБАВИТЬ ПРОЕКТ</NavLink>
    </div>
  );
}

export default MainPage;
