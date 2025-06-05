import { useState } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  isPrivate?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
  isPrivate = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="cyber-card group relative overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-70 z-10"
        aria-hidden="true"
      ></div>
      
      <div 
        className="h-48 overflow-hidden relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div 
          className="absolute inset-0 bg-cyber-dark opacity-20 group-hover:opacity-0 transition-opacity duration-500"
          aria-hidden="true"
        ></div>
        
        {isPrivate && (
          <div className="absolute top-3 right-3 bg-cyber-black bg-opacity-80 p-2 rounded-full z-20">
            <Lock className="h-4 w-4 text-cyber-red" />
          </div>
        )}
      </div>
      
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyber-blue transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-block text-xs font-mono py-1 px-2 bg-cyber-dark border border-cyber-gray text-cyber-blue"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs font-mono text-white hover:text-cyber-blue transition-colors duration-300"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Demo
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs font-mono text-white hover:text-cyber-blue transition-colors duration-300"
            >
              <Github className="h-3 w-3 mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
      
      <div 
        className={`absolute inset-0 border-2 border-cyber-blue opacity-0 transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-30' : ''
        }`}
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default ProjectCard;