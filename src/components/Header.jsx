import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  if (isLoggedIn) {
    links.push({ name: "Account", link: "/account" });
  } else {
    links.push({ name: "Get Started", link: "/auth" });
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="p-4 shadow-lg">
      <div className="p-10 flex items-center justify-between py-4 md:px-10 px-7">
        <div className=" font-bold text-2xl cursor-pointer flex items-center ">
          React
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="block">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {showMenu ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${showMenu ? "block" : "hidden"} sm:flex sm:items-center`}
        >
          {links.map((link) => (
            <li key={link.name} className="sm:ml-8 text-lg">
              <a href={link.link} className="hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
