import React, { useEffect, useState } from "react";

export default function EducationSection() {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/education")
      .then((res) => res.json())
      .then((data) => setEducationData(data))
      .catch((err) => console.error("Error fetching education data:", err));
  }, []);

  return (
    <section id="education" className="p-24 sm:p-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-24">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-10">
            Education
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  {edu.degree}
                </h2>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500 mt-2">
                  Graduated: {edu.graduationYear}
                </p>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
          Experience
        </h1>
        <p className="max-w-md mb-8 sm:mb-16">
          With over 1.5 years of experience, I bring your vision to life with
          breathtaking designs and optimized user experience, setting up a path
          forward for your project.
        </p>
      </div>
    </section>
  );
}
