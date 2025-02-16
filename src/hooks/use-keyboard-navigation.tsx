import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onBack?: () => void;
  isFirstStep: boolean;
}

export function useKeyboardNavigation({ onNext, onBack, isFirstStep }: UseKeyboardNavigationProps) {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      // Handle arrow right or tab for next
      if (event.key === 'ArrowRight' || (event.key === 'Tab' && !event.shiftKey)) {
        event.preventDefault();
        onNext();
      }
      
      // Handle arrow left or shift+tab for back
      if (!isFirstStep && (event.key === 'ArrowLeft' || (event.key === 'Tab' && event.shiftKey))) {
        event.preventDefault();
        onBack?.();
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onNext, onBack, isFirstStep]);
}