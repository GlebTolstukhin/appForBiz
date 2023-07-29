import {  createContext } from 'react';
import s from './styles/app.module.css'
import MainPage from './components/MainPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CreateProject from './components/CreateProject';
import ProjectMain from './components/ProjectPage/ProjectMain';
import {useSelector } from 'react-redux';
import Logo from './components/Logo';
export const MyContext = createContext("")

function App() {

  const projects = useSelector(state => state.projects)



  return (
    <MyContext.Provider value={{projects: projects}}>
    <HashRouter>
    <div className={s.container}>
      <Logo />
      
      <Routes>
        <Route element={<MainPage projects={projects}/>} path='/'/>
        <Route element={<CreateProject />} path='/createPage'/>
        {projects.map(project => <Route key={project.id} path={`/project${project.id}`} element={<ProjectMain key={project.id} project={project}/>}/>)}
      </Routes>
    </div>
    </HashRouter>
    </MyContext.Provider>
  );
}

export default App;
