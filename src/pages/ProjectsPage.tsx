import { useState } from 'react';
import { Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import TerminalText from '../components/TerminalText';
import img2 from '../images/DonateNow.png'
import img1 from '../images/DeCap.png'

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const projects = [
    {
      title: 'DeCap (Decentralized Capital)',
      description: 'Semi-Decentralized Banking Web App to tackle challenges like financial inclusion, transparency and trust in traditional systems with fixed-deposit and loan-lending capabilities.',
      image: img1,
      technologies: ['Solidity', 'JavaScript', 'Web3Sec', 'JWT'],
      githubLink: '#'
    },
    {
      title: 'Donate Now',
      description: 'Decentralized web-app to cater the needs of a future-proof charity system which enables users to donate Ethereum (ETH) to verified campaigns setup by verified organizations in an interactive but secure fashion.',
      image: img2,
      technologies: ['Smart Contract', 'Solidity', 'Web3Sec', 'React'],
      githubLink: '#'
    }
  ];
  
  
  const filteredProjects = projects.filter(project => {

    const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return searchMatch;
  });
  
  return (
    <div className="cyber-section">
      <div className="container-custom">
        <div className="cyber-terminal mb-8">
          <TerminalText 
            text="$ ls -la ./projects"
            className="text-sm text-cyber-green mb-2"
            manual
          />
          <h1 className="text-4xl font-bold mb-4">Security Projects</h1>
          <TerminalText 
            text="Showcasing my work in Decentralized Applications (Dapps)."
            className="text-xl text-white"
            typeSpeed={30}
            manual
          />
        </div>
        
        {/* Search */}
        <div className="cyber-terminal mb-12">
          <div>           
            
            {/* Search */}
            <div className="cyber-card">
              <div className="flex items-center space-x-2 mb-4">
                <Search className="h-4 w-4 text-cyber-blue" />
                <h3 className="font-mono text-sm">Search Projects</h3>
              </div>
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, description, or tech"
                className="cyber-input text-sm"
              />
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                isPrivate={project.isPrivate}
              />
            ))}
          </div>
        ) : (
          <div className="cyber-card text-center py-12">
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-300">
              No projects match your current search. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;