import { useState } from "react";
import Logo from "../assets/Image/logo.svg";
import { NavLink } from "react-router-dom";
import Hamburger from "../assets/Image/icon-hamburger.svg";
import Close from "../assets/Image/icon-close.svg";

function Nav() {
  // const location = useLocation();
  // const activeBtn = location.pathname === "/home"

  function DesktopLayout() {
    return (
      <div className="lg:block md:hidden ssm:hidden">
        <div className=" pt-5 flex justify-between items-center ">
          <div className="pl-10">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex w-3xl justify-end gap-15 items-center pl-10 pr-4  bg-white/5 backdrop-blur uppercase">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-6 text-white tracking-widest text-[16px] font-light ${
                  isActive ? "border-b-2 border-white-500  text-white" : ""
                }`
              }
              // className=" hover:border-b-2 hover:text-white"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `py-6 text-white tracking-widest text-[16px] font-light ${
                  isActive ? "border-b-2 border-white-500  text-white" : ""
                }`
              }
              to="/destination"
            >
              Destination
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `py-6 text-white tracking-widest text-[16px] font-light ${
                  isActive ? "border-b-2 border-white-500  text-white" : ""
                }`
              }
              to="/crew"
            >
              Crew
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `py-6 text-white tracking-widest text-[16px] font-light ${
                  isActive ? "border-b-2 border-white-500  text-white" : ""
                }`
              }
              to="/technology"
            >
              Technology
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  function TabletLayout() {
    return (
      <div className="w-full lg:hidden md:block ssm:hidden ">
        <div className="pt-5 justify-between items-center flex ">
          <div className="pl-10">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="w-xl flex justify-end gap-5 items-center pl-10 pr-4 bg-white/5 backdrop-blur uppercase">
            <NavLink
              className={({ isActive }) =>
                `py-6 text-white tracking-widest text-[16px] font-light ${
                  isActive ? "border-b-2 border-white-500  text-white" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `py-6 text-white tracking-widest text-[16px] font-light ${
                  isActive ? "border-b-2 border-white-500  text-white" : ""
                }`
              }
              to="/destination"
            >
              Destination
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `py-6 text-white tracking-widest text-[16px] font-light ${
                  isActive ? "border-b-2 border-white-500  text-white" : ""
                }`
              }
              to="/crew"
            >
              Crew
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `py-6 text-white tracking-widest text-[16px] font-light ${
                  isActive ? "border-b-2 border-white-500  text-white" : ""
                }`
              }
              to="/technology"
            >
              Technology
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  function MobileLayout() {
    const [toggle, setToggle] = useState(false);

    return (
      <div className="w-full lg:hidden md:hidden ssm:block ">
        <div className="relative">
          <div className="flex justify-between items-center p-5">
            <div className="pl-10">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="z-10">
              {toggle ? (
                <img src={Close} alt="" onClick={() => setToggle(false)} />
              ) : (
                <img src={Hamburger} alt="" onClick={() => setToggle(true)} />
              )}
            </div>
          </div>

          <div className="absolute top-0 right-0 w-70w ">
            {toggle ? (
              <div className="flex flex-col justify-center w-full h-screen gap-10   bg-blue-300/10 backdrop-blur uppercase">
                <NavLink
                  className={({ isActive }) =>
                    `pl-10 pr-20 text-white tracking-widest text-[16px] font-light ${
                      isActive ? "border-r-4 border-white pr-15 bg- text-white" : ""
                    }`
                  }
                  to="/"
                >
                  00 Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `pl-10 pr-20 text-white tracking-widest text-[16px] font-light ${
                      isActive ? "border-r-4 border-white pr-6 text-white" : ""
                    }`
                  }
                  to="/destination"
                >
                  01 Destination
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `pl-10 pr-20 text-white tracking-widest text-[16px] font-light ${
                      isActive ? "border-r-4 border-white pr-6 text-white" : ""
                    }`
                  }
                  to="/crew"
                >
                  02 Crew
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `pl-10 pr-20  text-white tracking-widest text-[16px] font-light ${
                      isActive ? "border-r-4 border-white pr-2 text-white" : ""
                    }`
                  }
                  to="/technology"
                >
                  03 Technology
                </NavLink>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <DesktopLayout />
        <TabletLayout />
        <MobileLayout />
      </div>
    </>
  );
}

export default Nav;
