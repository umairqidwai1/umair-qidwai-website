import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const generateStars = () => {
    const stars = [];
    const count = 150; // Adjust number of stars

    for (let i = 0; i < count; i++) {
      const size = Math.random() < 0.6 ? 'small' : Math.random() < 0.8 ? 'medium' : 'large';
      const star = document.createElement('div');
      star.className = `star star-${size}`;
      
      // Create a spiral pattern
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 40 + 10; // Distance from center (10-50%)
      const x = 50 + Math.cos(angle) * distance; // Center at 50%
      const y = 50 + Math.sin(angle) * distance; // Center at 50%
      
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.setProperty('--twinkle-duration', `${4 + Math.random() * 4}s`);
      star.style.setProperty('--rotate-speed', `${Math.random() * 20 + 40}s`); // 40-60s rotation
      star.style.setProperty('--orbit-distance', `${distance * 0.3}px`); // Scale down the orbit
      star.style.setProperty('--orbit-delay', `-${Math.random() * 40}s`); // Random start position
      stars.push(star);
    }
    return stars;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const stars = generateStars();
    const starsContainer = containerRef.current.querySelector('.stars-container');
    if (!starsContainer) return;

    stars.forEach(star => starsContainer.appendChild(star));

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / maxScroll) * 100;

      stars.forEach(star => {
        const speed = parseFloat(star.style.getPropertyValue('--rotate-speed') || '50');
        const baseY = parseFloat(star.style.top) || 0;
        const parallaxSpeed = (100 - baseY) * 0.001; // Stars higher up move more
        const yOffset = scrollPercent * parallaxSpeed;
        star.style.setProperty('--scroll-offset', `${yOffset}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A192F] to-black" />
      <div className="absolute inset-0 stars-container" />
    </div>
  );
};

export default StarBackground;
