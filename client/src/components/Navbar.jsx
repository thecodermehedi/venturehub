import {useState} from "react";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    {title: "Home", path: "#"},
    {title: "Company", path: "#"},
    {title: "City", path: "#"},
    {title: "Investor", path: "#"},
    {title: "About", path: "#"},
  ];

  return (
    <nav className="w-full z-10 bg-gray-50 fixed">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-0">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a
            href="#"
            className="text-black flex items-center gap-2 font-bold text-lg lg:text-xl xl:text-2xl"
          >
            <img src="/favicon.ico" alt="icon" className="w-8 h-8" /> VentureHub
          </a>
          <div className="md:hidden">
            <button
              className="text-black  outline-none p-2"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="hover:text-blue-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="#explore"
            className="py-3 px-4 text-white bg-black hover:bg-blue-600 border rounded-2xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
