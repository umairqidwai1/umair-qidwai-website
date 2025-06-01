
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -20% 0px",
    amount: 0.2
  });

  const experiences = [
    {
      title: "Teaching Assistant",
      company: "NICC",
      period: "Sep. 2023 - Present",
      description: "Assisted in teaching and mentoring students in computer science courses at The Ohio State University.",
      technologies: ["Teaching", "Mentoring", "Computer Science"]
    }
  ];

  return (    <section ref={sectionRef} id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-12 text-center"
        >
          Experience & Education
        </motion.h2>
        
        <div className="space-y-8">
          {/* Education Section */}          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">B.S. Computer Science & Engineering</h3>
                <p className="text-green-400 font-medium">The Ohio State University</p>
              </div>
              <span className="text-white/60 text-sm md:text-base">Expected June 2027</span>
            </div>
            
            <p className="text-white/80 mb-4 leading-relaxed">
              Honors Engineering student pursuing Computer Science & Engineering with a minor in Business. 
              Currently developing skills in software development, algorithms, and system design.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                Honors Program
              </span>
              <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                Business Minor
              </span>
            </div>
          </motion.div>

          {/* Google Certificate */}          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Google Project Management Certificate</h3>
                <p className="text-green-400 font-medium">Coursera</p>
              </div>
              <span className="text-white/60 text-sm md:text-base">Nov. 2023</span>
            </div>
            
            <p className="text-white/80 mb-4 leading-relaxed">
              Learned Agile methodologies, team coordination, and project execution strategies 
              through Google's comprehensive project management program.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                Agile
              </span>
              <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                Project Management
              </span>
            </div>
          </motion.div>

          {/* Work Experience */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: (index + 2) * 0.1, duration: 0.5, ease: "easeOut" }}
              className="backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-green-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-white/60 text-sm md:text-base">{exp.period}</span>
              </div>
              
              <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
