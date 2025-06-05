import { Briefcase, Award, GraduationCap, BookOpen } from "lucide-react";
import TerminalText from "../components/TerminalText";
import TimelineItem from "../components/TimelineItem";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Security Analayst Intern",
      subtitle: "Suma Soft Pvt. Ltd.",
      dateRange: "Jun'23 - Dec'23",
      description:
        "Conducted thorough Vulnerability Assessment and Penetration Testing (VAPT) on client systems, identifying critical security vulnerabilities and providing actionable mitigations to enhance system security and reduce potential threats via detailed reports.",
    },
    {
      title: "Android Application Development Intern",
      subtitle: "Invasystems INC.",
      dateRange: "Jun'22 - Jul'22",
      description:
        "Developed Full-stack in-house ticketing system using Java to streamline issue reporting and resolution for employees and admins. Integrated Role-Based Access Control to maintain a secure environment.",
    },
    {
      title: "Cyber Security Intern",
      subtitle: "Ernst & Young",
      dateRange: "Aug'21 - Sept'21",
      description:
        "Provided custom and tailored security consultation for clients across various sectors by suggesting security best practices listed among ISO 27001, NIST SP 800-53 and NIST CSF.",
    },
  ];

  const educationItems = [
    {
      title: "Master of Science in Cybersecurity Engineering",
      subtitle: "University of Washington",
      dateRange: "2025 - Present",
      description:
        "Specialized in penetration testing, advanced threat detection and static/dynamic malware analysis.",
    },
    {
      title: "Post-Graduate Program (Cyber Security)",
      subtitle: "Vellore Institute of Technology, Bangalore",
      dateRange: "2024 - 2025",
      description:
        "Deepend the learning curve towards cloud security, cryptography, and blockchain security with a focus on WEB 3.0 vulnerabilities and decentralized systems.",
    },
    {
      title: "Bachelor of Technology in CSIT (Cyber Security)",
      subtitle: "Symbiosis Skills and Professional University",
      dateRange: "2020 - 2024",
      description:
        "Focused on secure software development, network security, and data structures.",
    },
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

          {/* Education Timeline */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-cyber-blue mr-2" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="ml-4">
              {educationItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  dateRange={item.dateRange}
                  description={item.description}
                  isLast={index === educationItems.length - 1}
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
                  <span className="text-white">
                    Discovered a critical vulnerabilities
                  </span>{" "}
                  in a popular web assets that could have resulted in a huge
                  losses to the organization. Received a bounty award and
                  recognition from the project team.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue font-mono mr-2">→</span>
                <p className="text-gray-300">
                  <span className="text-white">
                    Developed an automated security scanning tool
                  </span>{" "}
                  that reduced vulnerability assessment time by 60% and is now
                  used as the standard tool within the organization.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue font-mono mr-2">→</span>
                <p className="text-gray-300">
                  <span className="text-white">
                    Led a security training program
                  </span>{" "}
                  that educated over 500 developers on secure coding practices
                  and resulted in a 45% reduction in security issues found
                  during code reviews.
                </p>
              </li>
            </ul>
          </div>

          {/* Interests */}
          <div className="cyber-card">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-cyber-blue mr-2" />
              <h2 className="text-2xl font-bold">Interests & Activities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cyber-dark p-4 border border-cyber-gray">
                <h3 className="text-cyber-blue text-lg font-bold mb-2">
                  Professional Interests
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Offensive Security & Red Teaming</li>
                  <li>Zero-Knowledge Cryptography</li>
                  <li>Smart Contract Security</li>
                  <li>Threat Intelligence</li>
                  <li>Security Automation</li>
                </ul>
              </div>

              <div className="bg-cyber-dark p-4 border border-cyber-gray">
                <h3 className="text-cyber-blue text-lg font-bold mb-2">
                  Personal Activities
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Capture The Flag (CTF) Competitions</li>
                  <li>Contributing to Open Source Security Tools</li>
                  <li>Tech Meetups & Conferences</li>
                  <li>Rock Climbing & Hiking</li>
                  <li>Science Fiction Literature</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
