import { useEffect } from 'react';
import { OnboardingStep } from '@/types';

export function useMediaPreload(currentStepIndex: number, steps: OnboardingStep[]) {
  useEffect(() => {
    const nextStep = steps[currentStepIndex + 1];
    if (!nextStep) return;

    if (nextStep.contentType === 'image') {
      const img = new Image();
      img.src = nextStep.content;
    } else if (nextStep.contentType === 'video') {
      const video = document.createElement('video');
      video.src = nextStep.content;
      video.preload = 'auto';
    }
  }, [currentStepIndex, steps]);
}