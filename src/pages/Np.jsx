import { useNavigate } from "react-router-dom";
import NProject from "./NProject";
function Np() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center flex-col max-h-max-screen sm:max-h-screen w-full bg-black overflow-y-auto md:overflow-y-hidden">
        <div className="flex justify-center pt-20">
          <div className="w-full max-w-6xl px-6">
            <div className="breadcrumbs text-sm text-gray-400">
              <ul>
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <span className="text-white">Projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="justify-center items-center w-full max-w-6xl p-0 sm:pt-2">
          <NProject />
        </div>
      </div>
    </>
  );
}
export default Np;
