import { CheckCircle, Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  dateRange: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  subtitle,
  dateRange,
  description,
  isLast = false
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-0 left-3 w-px h-full bg-cyber-gray"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute top-0 left-0">
        <CheckCircle className="h-6 w-6 text-cyber-blue" />
      </div>
      
      <div className="cyber-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex items-center text-xs font-mono text-cyber-light">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{dateRange}</span>
          </div>
        </div>
        
        <h4 className="text-cyber-blue font-mono text-sm mb-4">{subtitle}</h4>
        
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;