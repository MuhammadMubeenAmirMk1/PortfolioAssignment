export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto mt-16 sm:mt-32">
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Muhammad Mubeen Amir.
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              ATTENTION RECRUITERS
            </h3>
            <p className="text-gray-400">
              Looking for a skilled UI/UX designer with a proven track record? I
              bring over 1.5 years of experience in web design and branding.
              Explore my portfolio and discover how I can add value to your
              project.
            </p>
            <div className="max-w-sm">
              <a
                href="https://drive.google.com/file/d/1cffRW8koTycghkFh3qqQ9Ietz7TTk5hP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>

        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp"
            alt="Mubeen Amir in a professional studio setting"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 sm:mt-32 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="text-sm text-gray-400">Navigation</div>
          {["Work", "About", "Contact", "Services"].map((item) => (
            <a key={item} href="#" className="block hover:text-gray-300">
              {item}
            </a>
          ))}
        </div>
        <div className="space-y-4">
          <div className="text-sm text-gray-400">Services</div>
          {["UI Design", "UX design", "Branding", "Responsive"].map((item) => (
            <a key={item} href="#" className="block hover:text-gray-300">
              {item}
            </a>
          ))}
        </div>
        <div className="space-y-4 md:col-span-2">
          <div className="text-sm text-gray-400">Connect</div>
          <div className="flex gap-4">
            {["LinkedIn", "GitHub", "Twitter", "Email"].map((social) => (
              <a key={social} href="#" className="hover:text-gray-300">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
        <div className="text-sm text-gray-400 mb-4 sm:mb-0">
          © 2023 Muhammad Mubeen Amir. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
}
