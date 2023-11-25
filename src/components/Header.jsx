import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  if (isLoggedIn) {
    links.push({ name: "Account", link: "/account" });
  } else {
    links.push(
      { name: "Login", link: "/login" },
      { name: "Register", link: "/register" }
    );
  }
  return (
    <header className="p-4 shadow-lg">
      <div className="p-10 sm:flex items-center justify-between py-4 md:px-10 px-7">
        <div className=" font-bold text-2xl cursor-pointer flex items-center ">
          React
        </div>
        <ul className="sm:flex sm:items-center">
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
