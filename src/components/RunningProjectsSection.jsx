import React from "react";

export default function RunningProjectsSection() {
  return (
    <section
      id="running-project"
      className="py-16 sm:py-32 px-4 sm:px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            OUR
            <br />
            RUNNING PROJECT
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-400 mb-8 text-lg">
            As a UI/UX designer, I combine modern design thinking, visual clarity, and intuitive interfaces to create experiences aligned with market trends and user expectations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              Let's discuss
            </a>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="relative group">
          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/muebles-A5xVCsLbOEVKVWpNLV9ZmUSDfCVfuz.jpeg"
              alt="Luxury bathroom interior with marble finishes"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
