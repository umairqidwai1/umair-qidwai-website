
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Led development of enterprise-scale web applications using React and Node.js. Managed a team of 5 developers and implemented CI/CD pipelines.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects including e-commerce platforms and SaaS applications.",
      technologies: ["Vue.js", "Python", "Docker", "MongoDB"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2019 - 2020",
      description: "Created responsive web applications and collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["JavaScript", "Sass", "Webpack", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-12 text-center"
        >
          Experience
        </motion.h2>
        
        <div ref={ref} className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
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
