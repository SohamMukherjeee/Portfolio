import Footer from "../components/Footer";
import TechCategory from "../components/TechCategory";
import { useNavigate } from "react-router-dom";

import {
  SiJavascript,
  SiCplusplus,
  //SiJava,
  SiC,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiReact,
  SiTailwindcss,
  SiDaisyui,
  //  SiNodeDotJs,
  SiExpress,
  SiAxios,
  SiPostman,
  SiGit,
  SiGithub,
  SiPhpmyadmin,
  SiCloudinary,
} from "react-icons/si";

function TechStack() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center bg-black flex-col min-h-screen px-0 sm:px-4 overflow-x-hidden">
      <div className="breadcrumbs text-sm pt-10">
        <ul>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          <li>
            <a className="underline hover:no-underline">Techstack</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center w-full pt-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          My TechStack
        </h1>
      </div>

      <div className="flex flex-col justify-center items-start mt-10 pl-0 sm:pl-31">
        <TechCategory
          title="Languages"
          items={[
            { name: "C++", icon: SiCplusplus },
            { name: "JavaScript", icon: SiJavascript },
            //    { name: "Java", icon: SiJava },
            { name: "C", icon: SiC },
            { name: "SQL", icon: SiMysql },
          ]}
        />

        <TechCategory
          title="Frameworks & Libraries"
          items={[
            { name: "React", icon: SiReact },
            //      { name: "Node.js", icon: SiNodeDotJs },
            { name: "Express.js", icon: SiExpress },
            { name: "Axios", icon: SiAxios },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Daisy UI", icon: SiDaisyui },
          ]}
        />

        <TechCategory
          title="Tools & Platforms"
          items={[
            { name: "Firebase", icon: SiFirebase },
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "phpMyAdmin", icon: SiPhpmyadmin },
            { name: "Cloudinary", icon: SiCloudinary },
            { name: "Postman", icon: SiPostman },
          ]}
        />

        <TechCategory
          title="Databases"
          items={[
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
            { name: "Firebase Realtime DB", icon: SiFirebase },
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}

export default TechStack;
