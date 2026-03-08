import React from 'react';

export const BatmanLogo = ({ className = 'w-12 h-12', ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 100 60" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <path 
      d="M 50,14 L 53,4 L 53,13 C 70,7 85,7 98,18 C 85,22 80,28 85,36 C 75,30 70,30 65,40 C 60,40 55,45 50,52 C 45,45 40,40 35,40 C 30,30 25,30 15,36 C 20,28 15,22 2,18 C 15,7 30,7 47,13 L 47,4 Z" 
    />
  </svg>
);
