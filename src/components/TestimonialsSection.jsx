import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      image:
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg?height=400&width=350",
      quote:
        "Working with Mubeen has been a remarkable experience. Their ability to navigate complex user needs and translate them into elegant, intuitive designs is exceptional. ",
      name: "Olivia S.",
      role: "Buisness owner",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg?height=400&width=350",
      quote:
        "Working with Mubeen has been a remarkable experience. Their ability to navigate complex user needs and translate them into elegant, intuitive designs is exceptional. ",
      name: "Olivia S.",
      role: "Buisness owner",
    },
  ];

  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            PEOPLE SAY
            <br />
            ABOUT ME
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-400 mb-8 text-lg">
              As a UI/UX designer, I apply modern design principles, emphasizing
              simplicity and cohesive visual identity, crafted to meet the needs
              of targeted audiences and current market trends.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors rounded-full"
            >
              Let's discuss
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt="Testimonial portrait"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <blockquote className="text-lg sm:text-xl text-gray-300">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <div className="text-xl font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
