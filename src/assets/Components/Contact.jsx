import React from "react";

const Contact = () => {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#3E2723]">
      <h1 className="text-4xl font-bold text-center text-[#D7B19D]">
        Contact Us
      </h1>
      <div className="mt-8 max-w-xl mx-auto">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-[#F2E5D5]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 mt-2 border border-[#D7B19D] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-[#F2E5D5]"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 mt-2 border border-[#D7B19D] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-[#F2E5D5]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 mt-2 border border-[#D7B19D] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Write your message here"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold bg-[#6B4F30] hover:bg-[#8D6E4B] rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-[#F2E5D5]">
          Or reach us directly at{" "}
          <a
            href="mailto:support@joeshoes.com"
            className="text-[#D7B19D] font-semibold"
          >
            support@coffeemarsh.com
          </a>
        </p>
        <p className="mt-2 text-lg text-[#F2E5D5]">
          You can also call us at{" "}
          <span className="text-[#D7B19D] font-semibold">+1 234 456 987</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
