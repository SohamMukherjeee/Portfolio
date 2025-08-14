// src/ProjectDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import projects from "../Data/projectsData";
import Footer from "../components/Footer";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  // Find the project with matching slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white p-10">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black">
        <div className="breadcrumbs text-sm pt-10">
          <ul>
            <li>
              <a onClick={() => navigate("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => navigate("/project")}>Project</a>
            </li>
            <li>
              <a className="underline hover:no-underline">{slug}</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="flex flex-col h-1/2 sm:h-full w-full sm:w-1/2 justify-center items-center mt-10">
            <div className="flex flex-row items-center w-full gap-x-1.5">
              <h1 className="text-2xl sm:text-4xl font-bold pl-2 sm:pl-23 text-start mb-4">
                {project.title}
              </h1>
              <GitHubButton
                href={project.githubLink}
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-star"
                data-size="large"
                aria-label="Star SohamMukherjeee on GitHub"
              >
                Star
              </GitHubButton>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-6 h-50 sm:h-70 w-88 sm:w-130"
            />
            <h2 className="text-md sm:text-2xl font-semibold mb-2 self-start pl-2  sm:pl-20 pb-5">
              Tech Stack
            </h2>

            <div className="w-full pl-3 sm:pl-20 pr-2 sm:pr-20 px-10 flex flex-wrap gap-4 pb-10 sm:pb-0">
              {project.techStack.map((item, idx) => (
                <span
                  key={idx}
                  className=" bg-[#18181B] text-white px-3 py-1  text-sm font-medium hover:cursor-pointer hover:bg-[#26262B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-1/2 sm:h-full w-full sm:w-1/2  justify-center items-center ">
            <h1 className="text-2xl self-start pb-3 pl-2 sm:pl-0">
              Project Description
            </h1>
            <ul className="list-disc list-inside text-white text-sm px-2 space-y-3">
              {project.projectPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="text-white w-full pt-10  mx-auto pl-3 sm:pl-0">
              {project.isLive && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline self-start hover:text-[#757A83] flex flex-row gap-x-2 items-center"
                >
                  Visit Live Site <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProjectDetail;
