import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Pageone from "../pages/page-one";
import PageTwo from "../pages/pagetwo"; 
const Navbar = () => {
  const [drawer, setDrawer] = useState("false");

  const clickerhandler = () => {
    setDrawer(!drawer);
    console.log(drawer);
  };

  const [menu, setMenu] = useState("Pageone");

  return (
    <>
      {" "}
      <div className="bg-black p-5">
        <div className="">
          <div onClick={clickerhandler} className="text-white ">
            {drawer ? (
              <FaBars className="md:hidden" />
            ) : (
              <AiOutlineClose className="md:hidden" />
            )}
          </div>
        </div>
      </div>{" "}
      <div className="flex relative">
      <div
        className={`bg-red-400  max-md:absolute max-md:top-0  ${
          drawer ? "max-md:hidden" : ""
        }`}
      >
        <aside className="w-full md:h-[650px] p-6 sm:w-60 dark:bg-gray-900 md:overflow-auto dark:text-gray-100 ">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
                Getting Started
              </h2>
              <div className="flex flex-col space-y-1 ">
                <div className="text-2xl text-red-400 " onClick={() => setMenu("Pageone")}>
                  Page ONE
                </div>
                <div className="hover:text-red-400"> onClick={() => setMenu("PageTwo")}
                  Page TWO
                </div>
                <div className="hover:text-red-400">
                  Page Three
                </div>
                <a rel="noopener noreferrer" href="#">
                  Appearance
                </a>
                <a rel="noopener noreferrer" href="#">
                  Mamba UI
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
                Dashboard
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Header
                </a>
                <a rel="noopener noreferrer" href="#">
                  Drawer
                </a>
                <a rel="noopener noreferrer" href="#">
                  Page Title
                </a>
                <a rel="noopener noreferrer" href="#">
                  Menus
                </a>
                <a rel="noopener noreferrer" href="#">
                  Sidebar
                </a>
                <a rel="noopener noreferrer" href="#">
                  Footer
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
                Pages
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Homepage
                </a>
                <a rel="noopener noreferrer" href="#">
                  Users
                </a>
                <a rel="noopener noreferrer" href="#">
                  Tools
                </a>
                <a rel="noopener noreferrer" href="#">
                  Settings
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
                Misc
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Tutorials
                </a>
                <a rel="noopener noreferrer" href="#">
                  Changelog
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
                Misc
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Tutorials
                </a>
                <a rel="noopener noreferrer" href="#">
                  Changelog
                </a>
              </div>
            </div>

            
          </nav>
        </aside>
      </div>

      <div className="bg-gray-100 w-full md:h-[650px] md:overflow-auto">
      {menu === "Pageone" && <Pageone />}
      {menu === "PageTwo" && <PageTwo />}
      </div>
      </div>
    
    </>
  );
};

export default Navbar;
