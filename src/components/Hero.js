import React from "react";
import Card from "./SingleComponents/Card";

function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-8" id="hero">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-blue-700">
            Welcome to BM Institute of Medical Sciences (BIMS)
          </h1>
          <h2 className="text-xl font-semibold text-blue-500">
            Shaping the Future of Healthcare
          </h2>
          <p className="text-gray-700">
            At BM Institute of Medical Sciences (BIMS), we are dedicated to
            excellence in medical education, research, and healthcare services.
            With a vision to transform healthcare in India and beyond, BIMS
            provides world-class education, cutting-edge research opportunities,
            and comprehensive healthcare services under one roof.
          </p>
          
          <h2 className="text-blue-700">Explore. Innovate. Lead.</h2>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/images/shaping.webp"
            alt="BM Institute of Medical Sciences"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 p-4 justify-center items-center ">
        <Card
          image="/images/adminster.webp"
          title="Admissions"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far."
        />
        <Card
          image="/images/adminster.webp"
          title="Courses"
          description="Discover the most innovative startups that are making waves in the tech world."
        />
        <Card
          image="/images/adminster.webp"
          title="Hospital Services"
          description="How AI is shaping the future across industries and changing the way we live."
        />
        <Card
          image="/images/adminster.webp"
          title="Research Programs"
          description="How AI is shaping the future across industries and changing the way we live."
        />
      </div>
    </>
  );
}

export default Hero;
