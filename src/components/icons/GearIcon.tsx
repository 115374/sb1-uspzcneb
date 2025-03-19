import React from 'react';

interface GearIconProps {
  className?: string;
  size?: number;
}

export function GearIcon({ className = '', size = 24 }: GearIconProps) {
  return (
    <img 
      src="/Gearslogo.png"
      width={size}
      height={size}
      alt="Gear Icon"
      className={className}
    />
  );
}