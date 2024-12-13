import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>
      <div className="mt-8 space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex items-start space-x-4">
          {/* Custom SVG Icon */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 11h8v2H8v-2zm0 4h5v2H8v-2zm0-8h8v2H8V7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600">
              At <span className="font-semibold text-gray-800">CoffeMarsh</span>
              , we are passionate about bringing you the finest coffee products
              that embody quality, craftsmanship, and sustainability.
              Established with a deep love for coffee culture, we strive to
              connect coffee lovers with exceptional brews and products from
              around the world.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex items-start space-x-4">
          {/* Custom SVG Icon */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              To create a community where coffee enthusiasts can explore, learn,
              and savor the rich world of coffee, while promoting fair trade and
              sustainable practices in every product we offer.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex items-start space-x-4">
          {/* Custom SVG Icon */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-2.95-.49-5.32-2.85-5.81-5.81H5v-2h2.07c.49-2.95 2.85-5.32 5.81-5.81V5h2v2.07c2.95.49 5.32 2.85 5.81 5.81H19v2h-2.07c-.49 2.95-2.85 5.32-5.81 5.81V19h-2v-2.07z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600">
              We envision a world where every coffee experience is a celebration
              of taste, culture, and connection, while supporting the farmers
              and artisans behind the beans.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex items-start space-x-4">
          {/* Custom SVG Icon */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 11-.001 14.001A7 7 0 0112 5zm-1 3h2v4h-2V8zm0 6h2v2h-2v-2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600">
              Our dedicated team of coffee aficionados works tirelessly to bring
              you the best products and an unparalleled shopping experience. We
              believe in the power of collaboration and the magic of coffee to
              connect people and ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
