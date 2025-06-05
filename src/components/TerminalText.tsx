import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

interface TerminalTextProps {
  text: string | string[];
  className?: string;
  typeSpeed?: number;
  startDelay?: number;
  showCursor?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  manual?: boolean; // <== NEW PROP
}

const TerminalText = ({
  text,
  className = '',
  typeSpeed = 30,
  showCursor = true,
  tag: Tag = 'div',
  manual = false, // default: false
}: TerminalTextProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const terminalClasses = `font-mono ${className}`;

  if (!isClient) {
    return <Tag className={terminalClasses}>{Array.isArray(text) ? text[0] : text}</Tag>;
  }

  return (
    <Tag className={terminalClasses}>
      <Typewriter
        {...(manual
          ? {
              onInit: (typewriter) => {
                typewriter.changeDelay(typeSpeed);

                if (Array.isArray(text)) {
                  text.forEach((line, index) => {
                    typewriter.typeString(line);
                    if (index < text.length - 1) {
                      typewriter.pauseFor(1000).typeString('\n');
                    }
                  });
                } else {
                  typewriter.typeString(text);
                }
                typewriter.start();
              },
            }
          : {
              options: {
                strings: Array.isArray(text) ? text : [text],
                autoStart: true,
                loop: false,
                delay: typeSpeed,
                deleteSpeed: 0,
                cursor: showCursor ? '|' : '',
                pauseFor: 2000,
                wrapperClassName: 'terminal-text-wrapper',
                cursorClassName: 'text-cyber-blue animate-blink',
              },
            })}
      />
    </Tag>
  );
};

export default TerminalText;
