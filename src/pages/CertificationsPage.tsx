import { Award } from "lucide-react";
import TerminalText from "../components/TerminalText";
import CertificationBadge from "../components/CertificationBadge";
import cert1 from "../images/cert1.png";
import cert2 from "../images/cert2.png";
import cert3 from "../images/cert3.png";

const CertificationsPage = () => {
  const certifications = [
    {
      title: "Jr. Penetration Tester",
      issuer: "TryHackMe",
      date: "Jul'25",
      image: cert3,
      verifyLink:
        "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-0HKMZICKA6.pdf",
    },{
      title: "Network Ethical Hacking",
      issuer: "Udemy",
      date: "Nov'20",
      image: cert1,
      verifyLink:
        "https://www.udemy.com/certificate/UC-f0b1cb86-cc3b-48a0-a91c-9be5eef52ac2/",
    },
    {
      title: "Ethical Hacking from Scratch",
      issuer: "Udemy",
      date: "Jul'21",
      image: cert2,
      verifyLink:
        "https://www.udemy.com/certificate/UC-e32f0873-5052-4aef-a3b5-f1efe105c670/",
    },
  ];

  return (
    <div className="cyber-section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-terminal mb-8">
            <TerminalText
              text="$ cat ./credentials/certifications.json"
              className="text-sm text-cyber-green mb-2"
              manual
            />
            <h1 className="text-4xl font-bold mb-4">
              Certifications & Credentials
            </h1>
            <TerminalText
              text="Learning and validating personal expertise in cybersecurity."
              className="text-xl text-white"
              typeSpeed={30}
              manual
            />
          </div>

          <div className="mb-10">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-cyber-blue mr-2" />
              <h2 className="text-2xl font-bold">
                Professional Certifications
              </h2>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <CertificationBadge
                  key={index}
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  image={cert.image}
                  verifyLink={cert.verifyLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
