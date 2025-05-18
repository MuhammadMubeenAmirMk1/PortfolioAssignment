import React from "react";

export default function FeaturedWorkSection() {
  return (
    <section id="featured-work" className="px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              FEATURED
              <br />
              WORK
            </h2>
            <div className="max-w-md">
              <p className="text-gray-400 mb-4">
                From intuitive mobile apps to visually engaging websites and
                seamless e-commerce experiences, my portfolio highlights a
                strong focus on user-centered design and creative
                problem-solving.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                Let's create
              </a>
            </div>
          </div>

          {/* Project Categories */}
          {[
            {
              title: "WEB DESIGN",
              number: "01",
              description: "Engaging and seamless design",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured-work-NnKV456M3xYtzxAXoDe9yZ1pG0q3oM.webp",
            },
            {
              title: "WEB DESIGN",
              number: "02",
              description: "Engaging and seamless design",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp",
            },
            {
              title: "WEB DESIGN",
              number: "03",
              description: "Engaging and seamless design",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-20%20at%2016.59.01-ibCB67QY10et58WW1RgWTpbuaUJdTl.jpeg",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 sm:py-12 border-t border-gray-800"
            >
              <div className="space-y-4 mb-4 sm:mb-0">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl sm:text-4xl font-bold">
                    {category.title}
                  </h3>
                  <span className="text-sm text-gray-400">
                    ({category.number})
                  </span>
                </div>
                <p className="text-gray-400">{category.description}</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="hidden md:block relative w-48 h-32 bg-gray-900">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 hover:text-gray-300"
                >
                  View projects
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Our Service Expertise */}
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              MY SERVICE
              <br />
              EXPERTISE
            </h2>
            <div className="max-w-md">
              <p className="text-gray-400 mb-4">
                From intuitive mobile apps to visually engaging websites and
                seamless e-commerce experiences
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                Start a project
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                number: "01",
                title: "WEB DESIGN",
                descriptions: [
                  "Designing intuitive interfaces that make interaction effortless.",
                  "Crafting user experiences that are both functional and delightful.",
                ],
              },
              {
                number: "02",
                title: "WEB DESIGN",
                descriptions: [
                  "Designing intuitive interfaces that make interaction effortless.",
                  "Crafting user experiences that are both functional and delightful.",
                ],
              },
              {
                number: "03",
                title: "WEB DESIGN",
                descriptions: [
                  "Designing intuitive interfaces that make interaction effortless.",
                  "Crafting user experiences that are both functional and delightful.",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="space-y-4">
                <span className="text-sm text-gray-400">
                  ({service.number})
                </span>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                {service.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
