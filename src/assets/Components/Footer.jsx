import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4E3629] text-[#F2E5D5] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="text-sm text-[#D7B19D] text-center">
            &copy; {new Date().getFullYear()} CoffeeMarsh. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
