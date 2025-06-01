
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/5 rounded-2xl border border-green-500/20 p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating beautiful, functional applications that solve real-world problems 
                and provide exceptional user experiences.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                With a strong foundation in both frontend and backend development, I specialize 
                in React, Node.js, and cloud technologies. I'm always exploring new technologies 
                and pushing the boundaries of what's possible on the web.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">5+</div>
                  <div className="text-white/70">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">50+</div>
                  <div className="text-white/70">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400 mb-6">Technologies</h3>
              
              {[
                { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
                { category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
                { category: 'Cloud', skills: ['AWS', 'Docker', 'Kubernetes', 'Vercel'] }
              ].map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="p-4 rounded-lg bg-black/40 border border-green-500/10"
                >
                  <h4 className="text-green-400 font-medium mb-2">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
