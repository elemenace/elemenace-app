import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/Blog");
  };

  return (
    <div className="h-screen flex items-center justify-center relative bg-[#4E3629]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed filter blur-sm opacity-80"
        style={{
          backgroundImage: `url('/bggcoffee.jpg')`,
        }}
      ></div>

      <div className="relative z-10 text-center text-white max-w-3xl px-6">
        <p className="text-base font-semibold tracking-wider uppercase text-[#D7B19D]">
          A Platform for Coffee Lovers
        </p>
        <h1 className="mt-4 text-5xl font-bold sm:text-6xl lg:text-7xl">
          Discover Exquisite Blends and Rich Aromas
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[#F2E5D5]">
          Where quality meets passion in every sip.
        </p>

        <button
          onClick={handleExploreClick}
          className="inline-flex items-center px-8 py-4 mt-8 font-semibold text-[#4E3629] transition-all duration-200 bg-[#D7B19D] rounded-full hover:bg-[#A47F6C] focus:ring-4 focus:ring-[#A47F6C] focus:ring-opacity-50"
        >
          Explore
          <svg
            className="w-6 h-6 ml-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
