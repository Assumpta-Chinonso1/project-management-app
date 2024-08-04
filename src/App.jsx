import { useState } from "react";
import NoProjectSelected from "./Component/NoProjectSelected";
import ProjectSideBar from "./Component/ProjectSideBar";
import NewProject from "./Component/NewProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStateAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
       
      };
    });
  }



  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStateAddProject={handleStateAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStateAddProject={handleStateAddProject} />
      {content}
    </main>
  );
}

export default App;

