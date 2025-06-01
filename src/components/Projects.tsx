
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "OSU Calorie Tracker",
      description: "Currently developing a Calorie Tracker app for OSU dining halls with API integration and cross-platform mobile support.",
      technologies: ["React Native", "API Integration", "iOS", "Android"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
      status: "Current"
    },
    {
      title: "OSU Schedule Planner",
      description: "Built a scheduling web app for OSU students with MySQL backend and React frontend, featuring optimized search and filter capabilities.",
      technologies: ["React", "MySQL", "Web Development", "Search Optimization"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      status: "Sep. 2024"
    },
    {
      title: "Athan Player - IoT Automation",
      description: "Developed a Raspberry Pi-based speaker system that plays audio at prayer times dynamically using Mosque API integration.",
      technologies: ["Raspberry Pi", "IoT", "API Integration", "Python"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      status: "Apr. 2024"
    },
    {
      title: "Smart Home Automation",
      description: "Converted an old home security system into a smart system using ESP32 and HomeAssistant, including smart locks and garage door automation.",
      technologies: ["ESP32", "HomeAssistant", "IoT", "Mobile Control"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      status: "Dec. 2023"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm text-green-400 bg-green-500/20 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
