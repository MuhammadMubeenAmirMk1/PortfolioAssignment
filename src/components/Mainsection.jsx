import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projectImages = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpPX-8ao3Ib23I_N8jGhY-Y502APj2PEEWQ&s?height=400&width=600",
    alt: "Web Design Project",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpPX-8ao3Ib23I_N8jGhY-Y502APj2PEEWQ&s?height=400&width=600",
    alt: "Web Design Project",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpPX-8ao3Ib23I_N8jGhY-Y502APj2PEEWQ&s?height=400&width=600",
    alt: "Web Design Project",
  },
];

const services = [
  {
    title: "UI Design",
    description:
      "Crafting visually appealing interfaces with usability in mind.",
  },
  {
    title: "UX Design",
    description: "Focusing on user experience and seamless interaction flow.",
  },
  {
    title: "Branding",
    description: "Creating consistent brand identity across platforms.",
  },
  {
    title: "Responsive Design",
    description:
      "Designing layouts that adapt beautifully to all screen sizes.",
  },
];

export default function MainSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="main" className="pt-24 sm:pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Project Images Grid/Slider */}
        <div id="picture-slider" className="mb-8 sm:mb-16">
          {/* Mobile Slider */}
          <div className="sm:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {projectImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[4/3] relative bg-gray-900">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] relative bg-gray-900">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-32">
          <div className="text-sm mb-4">Hi, I'm Muhammad Mubeen Amir</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            <span className="font-serif italic font-normal">UI/UX</span>
            <br className="hidden sm:block" /> Designer
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
            <p className="max-w-md text-gray-400">
              Transforming ideas into a digital design. Specializing in User
              Interface, User Experience and branding.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              Let's collaborate
            </a>
          </div>
        </div>

        {/* Experience Section (with toggle) */}
        <div className="mb-16 sm:mb-32">
          <div className="space-y-4 sm:space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-t border-gray-800 pt-4 sm:pt-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl">{service.title}</h3>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="inline-flex items-center gap-2 text-sm hover:text-gray-300"
                  >
                    {expandedIndex === index ? "Close" : "Explore"}
                  </button>
                </div>
                {expandedIndex === index && (
                  <p className="mt-3 text-gray-400 text-sm transition-all">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exhibition Image */}
        <div className="aspect-[16/9] relative bg-gray-900 mb-16 sm:mb-32">
          <img
            src="https://images.prismic.io/milanote/752a997a-9d50-474d-b4d7-745540f0a4b4_website-design-plan-example.png?auto=compress%2Cformat&w=1140?height=600&width=1200"
            alt="Project Showcase"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
