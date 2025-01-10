import React from 'react';

function DirectorsDesk() {
  return (
    <>
      {/* Background Image */}
      <div className="relative" id='directordesk'>
        <img
          src="/images/desktop.webp"
          alt="Desktop BIMS"
          className="absolute inset-0 w-full h-full object-cover opacity-50" // Background image with opacity
        />
        <div className="relative z-10">
          {/* Content */}
          <div className="max-w-4xl mx-auto p-8">
            <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
              {/* Title and Subtitle */}
              <div className="text-center">
                <h1 className="text-3xl font-extrabold text-blue-700">Director's Desk</h1>
                <h2 className="text-xl font-semibold text-blue-400 mt-2">Message from the Director</h2>
              </div>

              {/* Message Content */}
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to BM Institute of Medical Sciences (BIMS),
                </p>
                <p>
                  It is an honor and privilege to lead this prestigious institution, a beacon of excellence in medical education and healthcare. At BIMS, we are committed to shaping the future of healthcare by fostering a culture of innovation, academic rigor, and compassionate care.
                </p>
                <p>
                  Our institute, established under the visionary guidance of the BM Social Welfare Trust, is dedicated to empowering students with the knowledge, skills, and ethical values required to excel in the dynamic field of healthcare. With state-of-the-art infrastructure, experienced faculty, and a patient-centric approach, BIMS is not just an institution—it is a movement to transform lives and communities.
                </p>
                <p>
                  As we expand into fields like nursing, MBBS, and advanced research, along with the establishment of our future multispecialty hospital, our commitment remains steadfast—to create leaders who will shape the future of global healthcare.
                </p>
                <p>
                  I warmly invite you to be a part of the BIMS family and join us on this journey of excellence and transformation.
                </p>
                <p className="font-semibold mt-6 text-blue-700">
                  With best regards,<br />
                  Babita Kumari<br />
                  Director, BM Institute of Medical Sciences<br />
                  Kola Gahbadi, Barabanki, Uttar Pradesh - 225414
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default DirectorsDesk;
