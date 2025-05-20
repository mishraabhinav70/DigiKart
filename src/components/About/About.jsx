import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Us
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Welcome to <Link to="/"className="text-red-600 font-semibold">DigiKart</Link> — your trusted destination for quality products at great prices.
          We aim to make online shopping easy, affordable, and enjoyable.
        </p>

        {/* Info Blocks */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Block 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide reliable, high-quality products that meet your everyday needs, all while offering excellent customer service.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What We Offer</h3>
            <p className="text-gray-600">
              A wide range of handpicked products including electronics, fashion, lifestyle goods, and more — all at your fingertips.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Us?</h3>
            <p className="text-gray-600">
              We focus on customer satisfaction with fast delivery, safe payment options, easy returns, and 24/7 support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
