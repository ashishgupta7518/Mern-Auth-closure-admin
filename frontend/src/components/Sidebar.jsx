import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdEmail, MdSms, MdDomain } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { SiGamemaker } from "react-icons/si";
import { FaUpload, FaFileAlt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { PiFilePdfBold } from "react-icons/pi";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
      isActive ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"
    }`;

  return (
    <div className="w-[20%] h-screen fixed top-0 left-0 bg-white shadow-md p-5 z-10">
      <img
        src="https://meon.co.in/static/meon/img/logo-new.svg"
        alt="Logo"
        className="w-3/5 mb-6"
      />
      <ul className="space-y-2">
        <li>
          <NavLink to="/" className={linkClass}>
            <MdDashboard className="mr-3 text-blue-600 text-lg" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/credential" className={linkClass}>
            <IoMdKey className="mr-3 text-blue-600 text-lg" />
            Credential
          </NavLink>
        </li>
        <li>
          <NavLink to="/emaileditor" className={linkClass}>
            <MdEmail className="mr-3 text-blue-600 text-lg" />
            Email Editor
          </NavLink>
        </li>
        <li>
          <NavLink to="/makerchecker" className={linkClass}>
            <SiGamemaker className="mr-3 text-blue-600 text-lg" />
            Maker Checker
          </NavLink>
        </li>
        <li>
          <NavLink to="/logoupload" className={linkClass}>
            <FaUpload className="mr-3 text-blue-600 text-lg" />
            Logo Upload
          </NavLink>
        </li>
        <li>
          <NavLink to="/apiconsumer" className={linkClass}>
            <TbApi className="mr-3 text-blue-600 text-lg" />
            API Consumer
          </NavLink>
        </li>
        <li>
          <NavLink to="/smseditor" className={linkClass}>
            <MdSms className="mr-3 text-blue-600 text-lg" />
            SMS Editor
          </NavLink>
        </li>
        <li>
          <NavLink to="/newpdfeditor" className={linkClass}>
            <PiFilePdfBold className="mr-3 text-blue-600 text-lg" />
            New PDF Editor
          </NavLink>
        </li>
        <li>
          <NavLink to="/cmrupload" className={linkClass}>
            <FaFileAlt className="mr-3 text-blue-600 text-lg" />
            CMR Upload
          </NavLink>
        </li>
        <li>
          <NavLink to="/adddomain" className={linkClass}>
            <MdDomain className="mr-3 text-blue-600 text-lg" />
            Add Domain
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
