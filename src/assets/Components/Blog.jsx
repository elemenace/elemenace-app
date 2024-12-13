import React from "react";

const Blog = () => {
  // Array of blog post images
  const blogImages = [
    "/coffeeblog1.jpg",
    "/coffeeblog2.jpg",
    "/coffeeblog3.jpg",
    "/coffeeblog4.jpg",
    "/coffeeblog5.jpg",
    "/coffeblog6.jpg",
  ];

  // Array of coffee-related titles
  const coffeeTitles = [
    "Mastering Espresso Brewing",
    "A Journey Through Coffee Origins",
    "Latte Art for Beginners",
    "The Health Perks of Coffee",
    "Sustainable Coffee Farming",
    "Cold Brew Creations at Home",
  ];

  // Array of coffee-related descriptions
  const coffeeDescriptions = [
    "Discover the art of brewing the perfect espresso and elevate your coffee experience.",
    "Explore the rich history of coffee beans from around the world.",
    "Uncover the secrets to creating latte art like a professional barista.",
    "Dive into the health benefits of your favorite cup of joe.",
    "Learn about sustainable coffee farming practices that make a difference.",
    "Experience the unique flavors of cold brew coffee and how to make it at home.",
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#3E2723]">
      <h1 className="text-4xl font-bold text-center text-[#D7B19D]">Blog</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogImages.map((image, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-[#6B4F30] transition-all duration-300"
          >
            {/* Insert dynamic image */}
            <img
              className="w-full h-48 object-cover rounded-lg"
              src={image}
              alt={`Blog Post ${index + 1}`}
            />
            <h3 className="text-2xl font-semibold text-[#3E2723] mt-4">
              {coffeeTitles[index]}
            </h3>
            <p className="mt-2 text-[#6B4F30]">{coffeeDescriptions[index]}</p>
            <button className="mt-4 text-[#6B4F30] font-semibold hover:text-[#D7B19D] transition-all duration-200">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
