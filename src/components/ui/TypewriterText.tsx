import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterTextProps {
  text: string | string[];
  className?: string;
}

export function TypewriterText({ text, className = '' }: TypewriterTextProps) {
  return (
    <div className={`font-courier ${className}`}>
      <Typewriter
        options={{
          strings: Array.isArray(text) ? text : [text],
          autoStart: true,
          loop: Array.isArray(text),
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
}