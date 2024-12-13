import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#D7B19D] shadow-lg">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img className="w-14 " src="/logoCoffe.png" alt="Logo" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-[#4E3629] transition-all duration-200 rounded-md lg:hidden focus:bg-[#B59C89] hover:bg-[#B59C89]"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              to="/"
              className="text-base text-[#4E3629] transition-all duration-200 hover:bg-[#A47F6C] hover:text-white hover:rounded-full px-4 py-2"
            >
              Home
            </Link>

            <Link
              to="/Products"
              className="text-base text-[#4E3629] transition-all duration-200 hover:bg-[#A47F6C] hover:text-white hover:rounded-full px-4 py-2"
            >
              Products
            </Link>

            <Link
              to="/AboutUs"
              className="text-base text-[#4E3629] transition-all duration-200 hover:bg-[#A47F6C] hover:text-white hover:rounded-full px-4 py-2"
            >
              About Us
            </Link>

            <Link
              to="/Blog"
              className="text-base text-[#4E3629] transition-all duration-200 hover:bg-[#A47F6C] hover:text-white hover:rounded-full px-4 py-2"
            >
              Blog
            </Link>

            <Link
              to="/Contact"
              className="text-base text-[#4E3629] transition-all duration-200 hover:bg-[#A47F6C] hover:text-white hover:rounded-full px-4 py-2"
            >
              Contact
            </Link>
          </div>

          <Link
            to="/Products"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 hover:bg-[#FCF8F1] hover:text-[#4E3629] focus:text-[#4E3629] focus:bg-[#A47F6C] text-white bg-[#4E3629] rounded-full"
            role="button"
          >
            BuyNow
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
