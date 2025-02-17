import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { OnboardingStep } from '../../../types'
import { ProgressIndicator } from '../progress-indicator'
import { BackgroundGradients } from '../background-gradients';
import { OnboardingMedia } from '../media/onboarding-media';
import { ContinueButton } from '../buttons/continue-button';
import { useKeyboardNavigation } from '../../../hooks/use-keyboard-navigation';
import { useHintVisibility } from '@/hooks/use-hint-visibility';
import { KeyboardHint } from '../keyboard/keyboard-hint';
import { HelpLink } from '../buttons/help-link';
import { Confetti } from '@/components/effects/confetti';

interface OnboardingStepContentProps {
  step: OnboardingStep;
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStepIndex: number;
  totalSteps: number;
}
// src/components/onboarding/OnboardingStepContent.tsx
export function OnboardingStepContent({ 
  step, 
  onNext, 
  onBack,
  isFirstStep,
  isLastStep,
  currentStepIndex,
  totalSteps
}: OnboardingStepContentProps) {

  useKeyboardNavigation({ onNext, onBack, isFirstStep });
  const hintOpacity = useHintVisibility(currentStepIndex);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isLastStep) {
      setShowConfetti(true);
      // Optionally remove confetti after some time
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isLastStep]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {showConfetti && <Confetti />}
      <BackgroundGradients color={step.backgroundColor} />

      <div className="relative min-h-screen flex flex-col items-center justify-center mx-auto px-6 py-12">
        <div className="absolute top-8 left-0 right-0 px-6">
          <div className="absolute top-8 left-0 right-0 px-6">
            <ProgressIndicator 
              currentStep={currentStepIndex} 
              totalSteps={totalSteps}
              isFirstStep={isFirstStep}
              onBack={onBack}
            />
          </div>
        </div>

        <div className="fixed inset-0 pointer-events-none md:block hidden">
        {!isFirstStep && (
          <div className="absolute left-[12%] top-1/2 -translate-y-1/2">
            <KeyboardHint 
              direction="back" 
              opacity={hintOpacity}
            />
          </div>
        )}
        {!isLastStep && (
          <div className="absolute right-[12%] top-1/2 -translate-y-1/2">
            <KeyboardHint 
              direction="next" 
              opacity={hintOpacity}
            />
          </div>
        )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            className="flex flex-col items-center"
          >
            <motion.div
              className="text-white/30 text-sm mb-4 mt-8"
              // initial={{ opacity: 0}}
              // animate={{ opacity: 1}}
              // transition={{ duration: 0.8 }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay:0.6, duration: 2.2 }}
            >
              {step.section}
            </motion.div>

            <motion.h1
              className="sm:text-[48px] text-[36px] font-[500] text-white tracking-tighter leading-tight text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ delay: 0.2, duration: 2.2 }}
            >
              {step.title}
            </motion.h1>

            <OnboardingMedia
              contentType={step.contentType}
              content={step.content}
              alt={step.title}
            />

            <motion.p
              className="text-white text-center sm:text-[16px] text-[14px] font-[400] max-w-2xl mb-12 tracking-tight max-w-[420px]"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay:0.6, duration: 2.2 }}
            >
              {step.description}
            </motion.p>

            <motion.div
              className="relative w-full flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 2.2 }}
            >
              {!isLastStep && (
                <div className="block">
                  <ContinueButton onClick={onNext} label={step.actionLabel} />
                  {/* {step.faq && (
                    <HelpLink label="Any questions? Click here."/>
                  )} */}
                </div>
              )}
            </motion.div>
          </motion.div>
          {isLastStep && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{ delay:2, duration: 2.2 }}>
              <HelpLink label="Have any other questions? Click here to view Shello's FAQ."/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}