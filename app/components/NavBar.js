import React from "react";
import NavButton from "./buttons/NavButton";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 rounded-xl flex justify-between">
      <NavButton />
      <ul className="pr-4 flex gap-4 text-md font-semibold">
        <li>21066337</li>
        <li>De Haagse Hogeschool</li>
        <li>Sprint 3, React</li>
      </ul>
    </div>
  );
};

export default NavBar;
