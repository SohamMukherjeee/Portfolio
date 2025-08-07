import { useState } from "react";
import "./App.css";
import TechIcon from "./TechIcon";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import {
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiCss3,
  SiGmail,
} from "react-icons/si";
import { TbBrandCpp, TbBrandFirebase } from "react-icons/tb";
import {
  FaJava,
  FaNode,
  FaHtml5,
  FaGithub,
  FaExternalLinkAlt,
  FaFolder,
  FaLinkedin,
  FaDharmachakra,
} from "react-icons/fa";
import MobileNotice from "./MobileNotice";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <MobileNotice />

      <div className="flex justify-center items-center min-h-screen w-full bg-black overflow-x-hidden overflow-y-auto sm:overflow-y-hidden">
        <div className="grid w-full h-full grid-cols-1 md:grid-cols-3 md:grid-rows-7 gap-4 md:gap-3 p-4 md:p-20 overflow-x-hidden overflow-y-auto md:overflow-y-hidden">
          {/* Who Am I */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="whoami rounded-xl md:col-span-2 md:row-span-2 bg-[#0f0f0f] text-white p-6 shadow-md border border-white/10 font-mono  text-left px-6 py-5"
          >
            <span className="flex  items-center flex-row gap-2">
              <h1 className="text-xl md:text-3xl font-bold">Who am I?</h1>
              <div className="badge badge-sm badge-outline  badge-success whitespace-nowrap">
                Currently Available
              </div>
            </span>

            <p className="text-base md:text-md text-[#757A83] py-3">
              A passionate web development enthusiast with hands on project
              experience in the MERN stack. I'm currently seeking internship and
              full time opportunities.
            </p>
          </div>

          {/* Social Links */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="porichoi rounded-xl md:col-span-1 md:row-span-2 bg-[#0f0f0f]  p-6 shadow-md border border-white/10 text-white text-center py-6"
          >
            <h1 className="text-lg md:text-2xl font-bold">Social Links</h1>
            <div className=" space-x-6 flex flex-row justify-evenly mt-5">
              <div className="tooltip tooltip-bottom	" data-tip="linkedin/soham">
                <h1
                  className="flex justify-center items-center gap-x-2 text-[#757A83] hover:text-white cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/soham-mukherjee-1a411b221/",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedin className="h-10 w-10 " />
                </h1>
              </div>
              <div className="tooltip tooltip-bottom	" data-tip="github/soham">
                <h1
                  className="flex justify-center items-center gap-x-3 text-[#757A83] hover:text-white cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/SohamMukherjeee", "_blank")
                  }
                >
                  <FaGithub className="h-10 w-10 " />
                </h1>
              </div>
              <div
                className="tooltip tooltip-bottom	"
                data-tip="sohamsmx@gmail.com"
              >
                <h1
                  className="flex justify-center items-center gap-x-3 text-[#757A83] hover:text-white cursor-pointer"
                  onClick={() => window.open("mailto:sohamsmx@gmail.com")}
                >
                  <SiGmail className="h-10 w-10 " />
                </h1>
              </div>
            </div>
          </div>

          {/* Role */}
          <div
            {...(!isMobile && {
              "data-aos": "fade-right",
              "data-aos-offset": "300",
              "data-aos-delay": "450",
            })}
            className="role rounded-xl md:col-span-1 md:row-span-2 bg-[#0D3C52]/30   p-6  border border-white/10 text-white text-center shadow-lg py-10"
          >
            <h1 className="text-lg md:text-2xl font-bold pt-3">
              Student & Full Stack <br />
              Developer
            </h1>
          </div>

          {/* Avatar & Name */}
          <div className="name rounded-xl md:col-span-1 md:row-span-3 bg-[#0f0f0f]  p-6 shadow-md border border-white/10 backdrop-blur-md text-white flex flex-col justify-center items-center py-10">
            <RxAvatar className="text-6xl md:text-7xl" />
            <h1 className="text-2xl md:text-3xl font-bold mt-6">
              Soham Mukherjee
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="porichoi rounded-xl md:col-span-1 md:row-span-2 bg-[#0f0f0f]  p-6 shadow-md border border-white/10 text-white text-center py-6"
          >
            <h1
              className="text-lg  font-bold hover:underline cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact me
            </h1>
          </div>

          {/* Tech Stack */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="500"
            className="techstack relative  rounded-xl md:col-span-1 md:row-span-3 bg-[#0f0f0f] p-6 shadow-md border border-white/10 text-white px-6 py-5"
          >
            <h1 className="text-sm md:text-xl font-bold">
              Technologies I have worked with
            </h1>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4  pt-8 mb-7 sm:mb-0">
              <TechIcon icon={FaHtml5} label="Html" />
              <TechIcon icon={SiCss3} label="CSS" />
              <TechIcon icon={TbBrandCpp} label="CPP" />
              <TechIcon icon={FaJava} label="Java" />
              <TechIcon icon={SiJavascript} label="JS" />
              <TechIcon icon={SiMysql} label="MySQL" />
              <TechIcon icon={SiReact} label="React" />
              <TechIcon icon={FaNode} label="NodeJS" />
              <TechIcon icon={SiExpress} label="Express" />
              <TechIcon icon={SiMongodb} label="MongoDB" />
              <TechIcon icon={TbBrandFirebase} label="Firebase" />
              <TechIcon icon={FaGithub} label="GitHub" />
            </div>
            <h2
              className="pr-17 text-center text-sm w-full absolute bottom-4 underline cursor-pointer text-white hover:text-[#757A83] transition"
              onClick={() => navigate("/techstack")}
            >
              see more
            </h2>
          </div>

          {/* Projects Button */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            onClick={() => navigate("/Project")}
            className="proj animated-gradient rounded-xl md:col-span-1 md:row-span-1 hover:opacity-90 transition duration-300 text-white text-center py-5 cursor-pointer  p-6 shadow-md border border-white/10"
          >
            <h1 className="flex justify-center items-center gap-x-3 text-xl md:text-2xl font-bold">
              projects
            </h1>
          </div>

          {/* Education */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            className="edu rounded-xl md:col-span-1 md:row-span-2 bg-[#0f0f0f] text-white  p-6 shadow-md border border-white/10 px-6 py-5"
          >
            <h1 className="text-lg md:text-2xl font-bold">Education</h1>
            <p className="text-sm md:text-md mt-2">
              College (2022-2026)
              <span className="italic text-xs ml-2">
                CGPA: 8.97 (till 6th sem)
              </span>
            </p>
            <p className="text-sm text-[#757A83]">
              Institute of Engineering and Management
            </p>
            <p className="italic text-sm text-[#757A83]">
              B.Tech in Computer Science (AIML)
            </p>
          </div>

          {/* Resume */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1S3TncZ31tiSZcVs91oAAtPnc6S36hJtq/view?usp=sharing",
                "_blank"
              )
            }
            className="cv group  rounded-xl md:col-span-1 md:row-span-2 bg-[#0f0f0f] text-white p-6 shadow-md border border-white/10 text-center hover:bg-[#26262B] cursor-pointer py-10"
            title="Redirect to Resume"
          >
            <h1 className="text-xl md:text-3xl font-bold flex items-center justify-center flex-col">
              Resume
              <div className="pt-2">
                <FaFolder />
              </div>
            </h1>
            <FaExternalLinkAlt className="absolute top-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
