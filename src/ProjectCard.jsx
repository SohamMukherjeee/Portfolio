import { FaLink, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProjectCard({ image, title, description, techStack, link, isLive }) {
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/projects/${slug}`);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-4">
      <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-md p-6 flex flex-col gap-5 font-mono transition-all hover:shadow-lg">
        {/* Top Section: Title + Live Badge */}
        <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl font-semibold">{title}</h2>
          {isLive && (
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              <span className="text-green-400 text-sm">Live</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-white/5 text-gray-200 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={handleMoreDetails}
            className="w-1/2 bg-white/5 hover:bg-white/10 transition-all rounded-lg py-2 text-white text-sm flex items-center justify-center gap-2"
          >
            <FaLink /> Details
          </button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 bg-white/5 hover:bg-white/10 transition-all rounded-lg py-2 text-white text-sm flex items-center justify-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
