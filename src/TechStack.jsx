import Footer from "./Footer";
import TechCategory from "./TechCategory";
import { useNavigate } from "react-router-dom";
function TechStack() {
  const navigate = useNavigate();
  return (
    <>
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
            items={["C++", "JavaScript", "Java", "C", "SQL"]}
          />
          <TechCategory
            title="Frameworks & Libraries"
            items={[
              "React",
              "Node.js",
              "Express.js",
              "Axios",
              "Tailwind CSS",
              "Daisy UI",
            ]}
          />
          <TechCategory
            title="Tools & Platforms"
            items={[
              "Firebase",
              "Git",
              "GitHub",
              "phpMyAdmin",
              "Cloudinary",
              "Postman",
            ]}
          />
          <TechCategory
            title="Databases"
            items={["MongoDB", "MySQL", "Firebase Realtime DB"]}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default TechStack;
