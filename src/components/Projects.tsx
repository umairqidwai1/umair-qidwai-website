
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team workspaces, and project analytics.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool that helps businesses create marketing copy, blog posts, and social media content.",
      technologies: ["Python", "OpenAI API", "React", "FastAPI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      link: "#"
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
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
