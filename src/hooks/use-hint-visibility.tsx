import { useState, useEffect } from 'react';

export function useHintVisibility(stepIndex: number) {
  const [opacity, setOpacity] = useState(stepIndex <= 1 ? 0.5 : 0.2);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Set initial opacity based on step
    setOpacity(stepIndex == 2 ? 1 : 0.25);

    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set timeout to increase opacity after 10 seconds
    const newTimeoutId = setTimeout(() => {
      setOpacity(0.6);
    }, 10000);

    setTimeoutId(newTimeoutId);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [stepIndex]);

  return opacity;
}