import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export function Confetti() {
    useEffect(() => {
      // Create a confetti cannon effect
      const duration = 8 * 1000; // 8 seconds
      const animationEnd = Date.now() + duration;
  
      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      }
  
      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
  
        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }
  
        // Gradually reduce the intensity as the animation progresses
        const particleCount = 50 * (timeLeft / duration);
  
        // Launch confetti from both sides
        confetti({
          particleCount: particleCount,
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          origin: { x: randomInRange(0.1, 0.9), y: 0 },
          colors: ['#c0c0c0', '#A8A8A8', '#D3D3D3', '#E8E8E8', '#F5F5F5', '#FFCA8B'],
          shapes: ['square', 'circle'],
          gravity: 0.8,
          scalar: 0.9,
          drift: 0,
          ticks: 500
        });
      }, 250); // Launch every 250ms
  
      return () => clearInterval(interval);
    }, []);
  
    return null; // This component doesn't render anything
  }