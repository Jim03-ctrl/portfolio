import { useRef } from 'react';
import { Mail, Download, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <section id="home" className="min-h-screen flex items-center bg-black relative overflow-hidden pt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1
                ref={textRef}
                className="text-6xl md:text-7xl font-Poppins tracking-tight text-white"
              >
                James Ryan Guillena
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-300 font-Poppins tracking-wide">
                IT STUDENT & ASPIRING DEVELOPER
              </h2>

              <p className="text-lg text-gray-400 font-Poppins">
                Davao City, Philippines 8000
              </p>
            </div>

            <p className="text-lg text-gray-400 font-Poppins">
              An aspiring IT student is someone passionate about technology, eager to learn about computers, software, and networks, and determined to build a career in the ever-evolving field of information technology.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
              <a
                href="/public/images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-lg font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 border border-zinc-800"
              >
                Resume
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first md:order-last">
            <div className="relative h-[300px] w-[300px] md:h-[350px] md:w-[350px] mx-auto">
              <img
                src="/images/jim.jpg"
                alt="James Ryan Guillena"
                className="w-full h-full object-cover rounded-full bg-zinc-900 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
