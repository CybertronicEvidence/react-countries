const Header = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Login", link: "/" },
    { name: "Register", link: "/" },
  ];
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
