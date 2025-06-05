import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const colors = ['#00F0FF', '#39FF14', '#D100FF'];
    const initialParticles: Particle[] = [];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: (Math.random() * 0.5) + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(initialParticles);
    
    // Animation loop
    const intervalId = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y > 100 ? 0 : particle.y + particle.speed,
          opacity: Math.sin((Date.now() / 3000) * particle.speed) * 0.3 + 0.2
        }))
      );
    }, 50);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-20"></div>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transition: 'opacity 1s ease'
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;