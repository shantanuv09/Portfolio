import { useState } from 'react';
import { Filter, Search, Check } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import TerminalText from '../components/TerminalText';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const projects = [
    {
      title: 'Blockchain Security Audit Platform',
      description: 'Automated security auditing platform for smart contracts that identifies vulnerabilities and security flaws in Solidity code before deployment.',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
      technologies: ['Solidity', 'JavaScript', 'Ethereum', 'Static Analysis'],
      category: 'blockchain',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Zero-Day Vulnerability Scanner',
      description: 'Advanced vulnerability scanner that uses machine learning to detect potential zero-day vulnerabilities in web applications and network services.',
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg',
      technologies: ['Python', 'TensorFlow', 'OWASP', 'Network Security'],
      category: 'pentest',
      githubLink: '#',
      isPrivate: true
    },
    {
      title: 'Secure IoT Gateway',
      description: 'Developed a secure gateway solution for IoT devices that provides encryption, authentication, and intrusion detection capabilities.',
      image: 'https://images.pexels.com/photos/5388813/pexels-photo-5388813.jpeg',
      technologies: ['C++', 'MQTT', 'TLS', 'Embedded Security'],
      category: 'network',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Privacy-Preserving Authentication System',
      description: 'Authentication system using zero-knowledge proofs to verify user identity without revealing sensitive information.',
      image: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg',
      technologies: ['Cryptography', 'zk-SNARKs', 'Node.js', 'React'],
      category: 'crypto',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Threat Intelligence Dashboard',
      description: 'Real-time dashboard for monitoring and analyzing cybersecurity threats, vulnerabilities, and attack patterns.',
      image: 'https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg',
      technologies: ['Python', 'D3.js', 'Elasticsearch', 'API Integration'],
      category: 'analysis',
      demoLink: '#'
    },
    {
      title: 'Secure Code Review Tool',
      description: 'Automated tool that scans codebases for security vulnerabilities, coding errors, and compliance issues with detailed reporting.',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      technologies: ['TypeScript', 'AST Parsing', 'SAST', 'DevSecOps'],
      category: 'devsecops',
      githubLink: '#'
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'blockchain', name: 'Blockchain Security' },
    { id: 'pentest', name: 'Penetration Testing' },
    { id: 'network', name: 'Network Security' },
    { id: 'crypto', name: 'Cryptography' },
    { id: 'analysis', name: 'Threat Analysis' },
    { id: 'devsecops', name: 'DevSecOps' }
  ];
  
  const filteredProjects = projects.filter(project => {
    // Filter by category
    const categoryMatch = activeFilter === 'all' || project.category === activeFilter;
    
    // Filter by search query
    const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });
  
  return (
    <div className="cyber-section">
      <div className="container-custom">
        <div className="cyber-terminal mb-8">
          <TerminalText 
            text="$ ls -la ./projects"
            className="text-sm text-cyber-green mb-2"
          />
          <h1 className="text-4xl font-bold mb-4">Security Projects</h1>
          <TerminalText 
            text="Showcasing my work in cybersecurity, penetration testing, and blockchain security."
            className="text-xl text-white"
            typeSpeed={30}
          />
        </div>
        
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div className="md:col-span-2 cyber-card">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="h-4 w-4 text-cyber-blue" />
                <h3 className="font-mono text-sm">Filter by Category</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center text-xs font-mono py-1 px-3 border ${
                      activeFilter === category.id
                        ? 'bg-cyber-blue bg-opacity-20 border-cyber-blue text-white'
                        : 'bg-cyber-dark border-cyber-gray text-cyber-light hover:border-cyber-blue hover:text-white transition-colors duration-300'
                    }`}
                  >
                    {activeFilter === category.id && <Check className="h-3 w-3 mr-1" />}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
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
                placeholder="Search by name, description, or technology..."
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
              No projects match your current filters. Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;