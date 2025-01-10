import React from "react";
import CardTwo from "./SingleComponents/CardTwo";

function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 rounded-lg shadow-lg" id="about">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-blue-700">About Us</h1>
          <h2 className="text-xl font-semibold text-blue-500">About BIMS</h2>
          <p className="text-gray-700">
            BM Institute of Medical Sciences (BIMS), established under the
            esteemed BM Social Welfare Trust, is a premier institute dedicated
            to nurturing the next generation of healthcare leaders. Located in
            Kola Gahbadi, Barabanki, Uttar Pradesh - 225414, BIMS combines
            academic excellence with state-of-the-art infrastructure and a
            commitment to holistic development.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/images/about.webp"
            alt="About BIMS"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 p-8">
      <CardTwo
        image="/images/vision.jpg"
        title="Our Vision"
        description="To be a global leader in medical education, research, and healthcare."
      />
      <CardTwo
        image="/images/mission.png"
        title="Our Mission"
        description="To provide innovative education, foster research, and deliver compassionate healthcare to the community."
      />
    </div>
    </>
  );
}

export default About;
