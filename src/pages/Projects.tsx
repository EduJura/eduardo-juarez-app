import { useState, useEffect, useCallback } from "react";
import { Timeline, FeedbackMessage } from "../components";
import { httpRequest } from "../utils";

function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const getProjects = useCallback(getAllProjects, []);

  useEffect(() => {
    const projectsData = getProjects();
    projectsData.then((data) => {
      try {
        setFeedbackMessage("");
        setProjects(data.projects);
      } catch (error) {
        console.error(error);
        setFeedbackMessage("No projects to be shown, please try again!");
      }
    });
  }, [getProjects]);

  async function getAllProjects(): Promise<any> {
    try {
      const projectsURL = "/projects";
      const response = await httpRequest.get(projectsURL);
      if (response.status === 200) {
        return await response.data;
      }
      throw new Error("Error fetching projects data");
    } catch (error) {
      console.error(error);
    }
  }

  function existListedProjects():Boolean {
    return projects.length > 0;
  }

  return (
    <>
      <h1 className='text-3xl text-gray-900 font-[500] sm:text-6xl'>
        Projects
      </h1>
      {existListedProjects() ? (
        <Timeline data={projects} />
      ) : (
        <FeedbackMessage message={feedbackMessage} />
      )}
    </>
  );
}

export default Projects;
