interface KeyboardKeyProps {
    direction: 'left' | 'right';
  }
  
  export function KeyboardKey({ direction }: KeyboardKeyProps) {
    return (
      <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect 
          x="1" y="1" 
          width="42" height="26" 
          rx="4"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
        />
        <path 
          d={direction === 'right' 
            ? "M17 14H27M27 14L23 10M27 14L23 18" 
            : "M27 14H17M17 14L21 10M17 14L21 18"
          }
          stroke="rgba(255, 255, 255, 0.4)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    );
  }