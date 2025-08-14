import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

import summup from "../assets/summup.png";
function Project() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col max-h-max-screen w-full bg-black overflow-y-auto  gap-5">
      <div className="breadcrumbs text-sm pt-10">
        <ul>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          <li>
            <a className="underline hover:no-underline">Project</a>
          </li>
        </ul>
      </div>
      <h1 className="text-3xl text-white font-bold pt-5">Projects by me</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-3 grid-rows-1">
        <ProjectCard
          className="col-span-1 row-span-1"
          isLive={true}
          image={summup}
          title="SummUp"
          description="An AI-powered article summarizer built with React, Firebase Auth. Users can paste a link to get a concise summary and manage authentication—all on a single-page UI with Tailwind CSS.

"
          techStack={[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Firebase Auth",
            "Firebase Store",
          ]}
          link="https://github.com/SohamMukherjeee/summUP"
        />

        <ProjectCard
          className="col-span-1 row-span-1"
          isLive={true}
          image={summup}
          title="Housy"
          description="Housy is a full-stack real estate platform that allows users to browse, list, and explore residential properties. Designed to connect buyers and property owners seamlessly."
          techStack={[
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase Auth",
            "Cloudinary",
          ]}
          link="https://github.com/SohamMukherjeee/HousY"
        />

        <ProjectCard
          className="col-span-1 row-span-1"
          isLive={false}
          image={summup}
          title="Simple HTTP Server"
          description="A lightweight multithreaded HTTP server in Java using low-level Socket programming, capable of
handling multiple concurrent client requests efficientlyd"
          techStack={[
            "Java",
            "Unit Testing",
            "RFC 7230",
            "RFC 7232",
            "JSON parsing",
          ]}
          link="https://github.com/SohamMukherjeee/HTTP-SERVER"
        />
        <ProjectCard
          className="col-span-1 row-span-1"
          isLive={true}
          image={summup} // replace with your actual image import
          title="NewsX"
          description="A minimalist and responsive news website built with React, fetching real-time headlines using NewsAPI. Focused on frontend design and UX with clean routing and Tailwind styling."
          techStack={[
            "React",
            "React Router",
            "Tailwind CSS",
            "DaisyUI",
            "Node.js",
            "Express.js",
            "NewsAPI",
          ]}
          link="https://github.com/SohamMukherjeee/NewsX"
        />
      </div>
      <Footer />
    </div>
  );
}
export default Project;
