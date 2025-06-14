import React from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="h-[60px] bg-white shadow-md  px-6 flex items-center justify-between w-full">
      {/* Left: Button */}
      <NavLink
        to="https://closure.meon.co.in/admin/SUNIDHI"
        target="_blank"
        className="bg-[#0095ff] text-white text-sm font-medium py-2 px-6   rounded shadow hover:bg-[#07c] focus:outline-none focus:ring-4 focus:ring-blue-200 active:bg-[#0064bd]"
      >
        Test
      </NavLink>

      {/* Right: Profile + Logout */}
      <div className="flex items-center gap-4">
        <span className="text-base font-medium text-gray-700 flex items-center gap-1">
          <CgProfile className="text-xl" />
          {user?.name || "User"}
        </span>
        <button
          onClick={handleLogout}
          className="text-red-600 hover:underline text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
