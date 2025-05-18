import React from "react";

export default function EducationSection() {
  return (
    <section id="main" className="pt-24 sm:pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 sm:mb-32">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            <br className="hidden sm:block" /> Education
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
            <p className="max-w-md text-gray-400">
              Bacherlor's In Computer Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
