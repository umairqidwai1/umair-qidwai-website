
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/5 rounded-2xl border border-green-500/20 p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:umair@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition-colors"
            >
              Get In Touch
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/umairqidwai"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-full transition-colors"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
        
        <footer className="mt-12 pt-8 border-t border-green-500/20">
          <p className="text-white/60">
            © 2024 Umair Qidwai. Crafted with passion and precision.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
