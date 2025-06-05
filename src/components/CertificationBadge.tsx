import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificationBadgeProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyLink?: string;
}

const CertificationBadge = ({
  title,
  issuer,
  date,
  image,
  verifyLink
}: CertificationBadgeProps) => {
  return (
    <div className="cyber-card flex flex-col sm:flex-row items-center gap-6 hover:border-cyber-blue transition-colors duration-300">
      <div className="w-24 h-24 flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={`${title} certification badge`} 
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <Award className="w-16 h-16 text-cyber-blue" />
        )}
      </div>
      
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-cyber-blue font-mono text-sm mb-2">{issuer}</p>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
          <div className="flex items-center justify-center sm:justify-start text-cyber-light">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
          
          {verifyLink && (
            <a 
              href={verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start text-white hover:text-cyber-blue transition-colors duration-300"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Verify
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationBadge;