import { MdOutlineSchool } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";

function MobileHome() {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-black overflow-x-hidden">
        <div className="grid grid-cols-3 grid-rows-5 gap-3 p-3 ">
          {/* who am i lodu */}
          <div className="col-span-2 row-span-2  text-white p-6 shadow-md border border-white/10 rounded-xl">
              {/* <div className="badge badge-sm badge-outline  badge-success whitespace-nowrap ">
                Seeking opportunities
              </div> */}

            <h1 className="font-sans font-bold text-4xl text-[#605F5F]">Hello! <br /> <span className="text-3xl">I’m Soham.</span></h1>
            <p className="text-base md:text-md text-[#757A83] py-3 mt-2">
             <span className="text-white">Frontend </span>first, <span className="text-white"> full stack </span>when needed.
            </p>
          </div>
          {/* social linkss */}
          <div className="col-span-1 row-span-2  bg-[#0f0f0f] text-white p-6 shadow-md border border-white/10 rounded-2xl">
            <h1 className="text-md font-bold text-center">Social Links</h1>
            <div className=" space-y-6 flex flex-col  mt-6">
              <div className="tooltip tooltip-bottom	" data-tip="linkedin/soham">
                <h1
                  className="flex justify-center items-center  text-[#757A83] hover:text-white cursor-pointer"
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
                  className="flex justify-center items-center text-[#757A83] hover:text-white cursor-pointer"
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
                  className="flex justify-center items-center  text-[#757A83] hover:text-white cursor-pointer"
                  onClick={() => window.open("mailto:sohamsmx@gmail.com")}
                >
                  <SiGmail className="h-10 w-10 " />
                </h1>
              </div>
            </div>
          </div>
          {/* Resume */}
          <div className="col-span-1 row-span-1 bg-[#0f0f0f] text-white p-6 shadow-md border border-white/10 rounded-2xl">
            Resume
          </div>
          {/* Student and devu */}
          <div className="col-span-2 row-span-1 bg-[#0f0f0f] text-white p-6 shadow-md border border-white/10 rounded-2xl flex flex-col justify-center items-center gap-2">
            <RxAvatar className="text-6xl  " />
            <h1 className="text-md">Soham Mukherjee</h1>
          </div>
          {/* project */}
          <div className="col-span-2 row-span-2 bg-[#0f0f0f] text-white p-6 shadow-md border border-white/10 rounded-2xl">
            project
          </div>
          {/* educationnn */}
          <div
            className="col-span-1 row-span-1 bg-[#0f0f0f] text-white p-2 shadow-md border border-white/10 rounded-2xl flex flex-col justify-center items-center"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <h1 className="text-center text-md">Education</h1>
            <MdOutlineSchool className="text-4xl" />
            <dialog id="my_modal_2" className="modal ">
              <div className="modal-box bg-black">
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
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>

          {/* Techstack */}
          <div className="col-span-1 row-span-1 bg-[#0f0f0f] text-white p-6 shadow-md border border-white/10 rounded-2xl">
            {" "}
            Techs
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileHome;
