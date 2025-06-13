import { Users, Award, Briefcase, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 text-white tracking-tight">
              About Me
            </h2>
            <div className="w-24 h-px bg-zinc-700 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  An aspiring IT student and hardworking individual who is passionate about technology, eager to learn new skills, and committed to achieving goals through dedication, persistence, and continuous improvement.
                </p>
              </div>

              <div className="pt-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Example placeholder for skills */}
                  
                   
                  
                </div>
              </div>
            </div>

            {/* Right Circular Image */}
            <div className="relative mx-auto">
              <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-2xl bg-zinc-900">
                <img 
                  src="/images/nice.jpg" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
