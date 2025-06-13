import { useRef, useEffect, useState } from 'react';
import { Palette, Layout, UserSquare2, Box, PenTool, Users } from 'lucide-react';

const skills = [
  { id: 1, name: 'JavaScript', icon: Palette },
  { id: 2, name: 'Wireframe', icon: Layout },
  { id: 3, name: 'Networking', icon: UserSquare2 },
  { id: 4, name: 'Python', icon: Box },
  { id: 5, name: 'Visual Design', icon: PenTool },
  { id: 6, name: 'HTML/CSS', icon: Users },
];

const experience = [
  {
    id: 1,
    role: 'FrontEnd/BackEnd Developer Intern',
    company: 'Altmation Virtual Assistance Services.',
    period: '2025',
  },
  {
    id: 2,
    role: 'Game Developer Capstone Project',
    company: 'Holy Cross of Davao College',
    period: '2024 - 2025',
  },
];

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((ref) => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* Skills Section */}
            <div>
              <h2 className="text-4xl font-semibold mb-10">Skillset</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.id}
                      ref={(el) => (itemRefs.current[index] = el)}
                      className={`transition-all duration-500 ease-out transform ${
                        visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="bg-zinc-800 p-4 rounded-xl shadow-lg">
                          <Icon className="w-8 h-8 text-cyan-300" />
                        </div>
                        <span className="text-sm tracking-wide text-gray-300">{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-4xl font-semibold mb-10">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={exp.id}
                    ref={(el) => (itemRefs.current[index + skills.length] = el)}
                    className={`transition-all duration-500 ease-out transform ${
                      visibleItems.includes(index + skills.length) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="bg-zinc-900 p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-light mb-1">{exp.role}</h4>
                      <p className="text-gray-400 text-sm">{exp.company}</p>
                      <span className="text-gray-500 text-xs block mt-2">{exp.period}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
