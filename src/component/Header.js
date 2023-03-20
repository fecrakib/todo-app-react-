import React from "react";
import { BiBookmark} from "react-icons/bi";
const Header = () => {
  return (
    <div className="bg-gray-900 p-10 container mx-auto border-b rounded-tl-xl rounded-tr-xl">
      <h2
        className="uppercase fonsem text-teal-500 tracking-wider flex gap-2 items-center"
      >
        <span><BiBookmark/></span>
        <span>Todo App</span>
      </h2>
    </div>
  );
};

export default Header;
