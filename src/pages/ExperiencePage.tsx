import { Briefcase, Award } from 'lucide-react';
import TerminalText from '../components/TerminalText';
import TimelineItem from '../components/TimelineItem';

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Security Analayst Intern",
      subtitle: "Suma Soft Pvt. Ltd.",
      dateRange: "Jun'23 - Dec'23",
      description: "Conducted thorough Vulnerability Assessment and Penetration Testing (VAPT) on client systems, identifying critical security vulnerabilities and providing actionable mitigations to enhance system security and reduce potential threats via detailed reports."
    },
    {
      title: "Android Application Development Intern",
      subtitle: "Invasystems INC.",
      dateRange: "Jun'22 - Jul'22",
      description: "Developed Full-stack in-house ticketing system using Java to streamline issue reporting and resolution for employees and admins. Integrated Role-Based Access Control to maintain a secure environment."
    },
    {
      title: "Cyber Security Intern",
      subtitle: "Ernst & Young",
      dateRange: "Aug'21 - Sept'21",
      description: "Provided custom and tailored security consultation for clients across various sectors by suggesting security best practices listed among ISO 27001, NIST SP 800-53 and NIST CSF."
    }
  ];
  
  return (
    <div className="cyber-section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-terminal mb-8">
            <TerminalText 
              text="$ cat ./career/experience.log"
              className="text-sm text-cyber-green mb-2"
              manual
            />
            <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
            <TerminalText 
              text="Building a career in digital defense and security innovation."
              className="text-xl text-white"
              typeSpeed={30}
              manual
            />
          </div>
          
          {/* Experience Timeline */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-cyber-blue mr-2" />
              <h2 className="text-2xl font-bold">Career Path</h2>
            </div>
            
            <div className="ml-4">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={index}
                  title={experience.title}
                  subtitle={experience.subtitle}
                  dateRange={experience.dateRange}
                  description={experience.description}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
          
          {/* Achievements Section */}
          <div className="cyber-card mb-12">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-cyber-green mr-2" />
              <h2 className="text-2xl font-bold">Key Achievements</h2>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-cyber-blue font-mono mr-2">→</span>
                <p className="text-gray-300">
                  <span className="text-white">Discovered a critical vulnerabilities</span> in a popular web assets that could have resulted in a huge losses to the organization. Received a bounty award and recognition from the project team.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue font-mono mr-2">→</span>
                <p className="text-gray-300">
                  <span className="text-white">Developed an automated security scanning tool</span> that reduced vulnerability assessment time by 60% and is now used as the standard tool within the organization.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue font-mono mr-2">→</span>
                <p className="text-gray-300">
                  <span className="text-white">Led a security training program</span> that educated over 500 developers on secure coding practices and resulted in a 45% reduction in security issues found during code reviews.
                </p>
              </li>
            </ul>
          </div>
          
          {/* Testimonials */}
          {/* <div>
            <h2 className="text-2xl font-bold mb-6">What Colleagues Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="cyber-card">
                <p className="text-gray-300 italic mb-4">
                  "One of the most meticulous security professionals I've worked with. Their attention to detail in identifying vulnerabilities is exceptional."
                </p>
                <div className="font-mono text-sm">
                  <p className="text-white font-bold">Dr. Sarah Chen</p>
                  <p className="text-cyber-blue">CTO, BlockSecure Technologies</p>
                </div>
              </div>
              
              <div className="cyber-card">
                <p className="text-gray-300 italic mb-4">
                  "Brings a unique perspective to security challenges. Their innovative approaches have saved our clients from potentially devastating breaches."
                </p>
                <div className="font-mono text-sm">
                  <p className="text-white font-bold">Marcus Johnson</p>
                  <p className="text-cyber-blue">Lead Security Engineer, CyberDefense Corp</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;