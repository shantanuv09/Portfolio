interface SkillBarProps {
  name: string;
  level: number; // 1-5
  color?: string;
}

const SkillBar = ({ 
  name, 
  level, 
  color = 'cyber-blue' 
}: SkillBarProps) => {
  // Normalize level to be between 1-5
  const normalizedLevel = Math.max(1, Math.min(5, level));
  
  // Calculate percentage for the bar
  const percentage = (normalizedLevel / 5) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-mono text-sm">{name}</h4>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 mx-0.5 ${
                i < normalizedLevel 
                  ? `bg-${color}` 
                  : 'bg-cyber-gray'
              }`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="w-full bg-cyber-gray h-1">
        <div 
          className={`h-full bg-${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;