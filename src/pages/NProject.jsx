import React, { useState, usena } from "react";
import { ChevronLeft, ExternalLink, Github, Monitor } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for projects
const projects = [
  {
    id: 1,
    title: "SummUp",
    description:
      "An AI-powered article summarizer built with React, Firebase Auth. Users can paste a link to get a concise summary and manage authentication—all on a single-page UI with Tailwind CSS.",
    techStack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Firebase Auth",
      "Firebase Store",
    ],
    isLive: true,
    liveLink: "https://summup-demo.com",
    githubLink: "https://github.com/SohamMukherjeee/summUP",
    image: "/api/placeholder/400/250",
  },
  {
    id: 2,
    title: "Housy",
    description:
      "Housy is a full-stack real estate platform that allows users to browse, list, and explore residential properties. Designed to connect buyers and property owners seamlessly.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Cloudinary",
    ],
    isLive: true,
    liveLink: "https://housy-demo.com",
    githubLink: "https://github.com/SohamMukherjeee/HousY",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "Simple HTTP Server",
    description:
      "A lightweight multithreaded HTTP server in Java using low-level Socket programming, capable of handling multiple concurrent client requests efficiently.",
    techStack: ["Java", "Unit Testing", "RFC 7230", "RFC 7232", "JSON parsing"],
    isLive: false,
    githubLink: "https://github.com/SohamMukherjeee/HTTP-SERVER",
    image: "/api/placeholder/400/250",
  },
  {
    id: 4,
    title: "NewsX",
    description:
      "A minimalist and responsive news website built with React, fetching real-time headlines using NewsAPI. Focused on frontend design and UX with clean routing and Tailwind styling.",
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "NewsAPI",
    ],
    isLive: true,
    liveLink: "https://newsx-demo.com",
    githubLink: "https://github.com/SohamMukherjeee/NewsX",
    image: "/api/placeholder/400/250",
  },
];

function NProject() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isMobileExpanded, setIsMobileExpanded] = useState({});

  const toggleMobileExpand = (projectId) => {
    setIsMobileExpanded((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumbs */}

      {/* Main Content */}
      <div className="flex justify-center py-8">
        <div className="w-full max-w-6xl px-6">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 min-h-[400px]">
            {/* Sidebar */}
            <div className="col-span-4 bg-[#0F0F0F] rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-6 text-gray-200">
                All Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedProject.id === project.id
                        ? "bg-gray-800 border-l-4 border-blue-500"
                        : "bg-gray-800/30 hover:bg-gray-800/60"
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-white">
                        {project.title}
                      </h3>
                      {selectedProject.id === project.id && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>

                    <div className="flex gap-3 text-sm">
                      {project.isLive && (
                        <a
                          href={project.liveLink}
                          className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Monitor size={14} />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details Panel */}
            <div className="col-span-8 bg-[#0F0F0F] rounded-2xl p-8 backdrop-blur-sm">
              <div className="h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Project Image */}
                <div className="mb-6">
                  <div className="w-full h-64 bg-gray-800/50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-700">
                    <div className="text-center text-gray-500">
                      <Monitor size={48} className="mx-auto mb-2 opacity-50" />
                      <p>Project Preview</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/60 text-gray-200 rounded-full text-sm border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileExpand(project.id)}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <ChevronLeft
                    size={20}
                    className={`transform transition-transform duration-200 ${
                      isMobileExpanded[project.id]
                        ? "rotate-[-90deg]"
                        : "rotate-0"
                    }`}
                  />
                </div>

                <div className="flex gap-4 mt-3 mb-4">
                  {project.isLive && (
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors text-sm"
                    >
                      <Monitor size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>

                {isMobileExpanded[project.id] && (
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-800/60 text-gray-200 rounded-full text-xs border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NProject;
