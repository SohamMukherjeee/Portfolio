import { FaLink, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProjectCard({ image, title, description, techStack, link, isLive }) {
  const navigate = useNavigate();
  const handleMoreDetails = () => {
    // Create a dynamic URL like /projects/summup
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/projects/${slug}`);
  };

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 mb-5">
        <div className="bg-[#18181B] rounded-2xl p-4 flex flex-col items-center gap-6 w-80 sm:w-100 h-80 sm:h-90 mx-auto shadow-lg">
          {/* Image Side */}
          {/* <div className="w-full overflow-hidden rounded-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div> */}

          {/* Details Side */}
          <div className="w-full flex flex-col gap-4">
            {/* Title */}
            <div className="flex flex-row items-center gap-x-4 ">
              <h2 className="text-white text-2xl font-bold start-1">{title}</h2>
              {isLive && (
                <div className="badge badge-soft badge-success">
                  <div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                  </div>
                  Live
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Link Button */}
            <div className="flex flex-row items-center">
              <button
                onClick={handleMoreDetails}
                className="mt-2 w-1/2 bg-[#18181B] hover:cursor-pointer hover:bg-[#26262B] transition-colors rounded-xl py-3 flex items-center justify-center gap-2 text-white text-md"
              >
                <FaLink />
                More Details
              </button>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-1/2 bg-[#18181B] hover:bg-[#26262B] transition-colors rounded-xl py-3 flex items-center justify-center gap-2 text-white text-md"
              >
                <FaGithub />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
