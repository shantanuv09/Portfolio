import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

interface TerminalTextProps {
  text: string | string[];
  className?: string;
  typeSpeed?: number;
  startDelay?: number;
  showCursor?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

const TerminalText = ({
  text,
  className = '',
  typeSpeed = 50,
  startDelay = 0,
  showCursor = true,
  tag: Tag = 'div'
}: TerminalTextProps) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Default styles for terminal text
  const terminalClasses = `font-mono ${className}`;
  
  if (!isClient) {
    // Server-side or initial render
    return <Tag className={terminalClasses}>{Array.isArray(text) ? text[0] : text}</Tag>;
  }
  
  return (
    <Tag className={terminalClasses}>
      <Typewriter
        options={{
          strings: Array.isArray(text) ? text : [text],
          autoStart: true,
          loop: Array.isArray(text) && text.length > 1,
          delay: typeSpeed,
          deleteSpeed: typeSpeed,
          cursor: showCursor ? '|' : '',
          pauseFor: 2000,
          wrapperClassName: 'terminal-text-wrapper',
          cursorClassName: 'text-cyber-blue animate-blink',
        }}
      />
    </Tag>
  );
};

export default TerminalText;