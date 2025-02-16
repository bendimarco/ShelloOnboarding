import { motion, AnimatePresence } from 'framer-motion'
import { OnboardingStep } from '../../../types'
import { ProgressIndicator } from '../progress-indicator'
import { BackgroundGradients } from '../background-gradients';
import { OnboardingMedia } from '../media/onboarding-media';
import { ContinueButton } from '../buttons/continue-button';
import { BackButton } from '../buttons/back-button';
import { useKeyboardNavigation } from '../../../hooks/use-keyboard-navigation';
import { useHintVisibility } from '@/hooks/use-hint-visibility';
import { KeyboardHint } from '../keyboard/keyboard-hint';



interface OnboardingStepContentProps {
  step: OnboardingStep;
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  currentStepIndex: number;
  totalSteps: number;
}
// src/components/onboarding/OnboardingStepContent.tsx
export function OnboardingStepContent({ 
  step, 
  onNext, 
  onBack,
  isFirstStep,
  currentStepIndex,
  totalSteps
}: OnboardingStepContentProps) {

  useKeyboardNavigation({ onNext, onBack, isFirstStep });
  const hintOpacity = useHintVisibility(currentStepIndex);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundGradients color={step.backgroundColor} />

      <div className="relative min-h-screen flex flex-col items-center justify-center mx-auto px-6 py-12">
        <div className="absolute top-8 left-0 right-0 px-6">
          <ProgressIndicator 
            currentStep={currentStepIndex} 
            totalSteps={totalSteps}
          />
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
        <div className="absolute right-[12%] top-1/2 -translate-y-1/2">
          <KeyboardHint 
            direction="next" 
            opacity={hintOpacity}
          />
        </div>
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
              transition={{ delay:1.2, duration: 2.2 }}
            >
              {step.section}
            </motion.div>

            <motion.h1
              className="text-[48px] font-[500] text-white tracking-tighter leading-tight text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ delay: 0.2, duration: 2 }}
            >
              {step.title}
            </motion.h1>

            <OnboardingMedia
              contentType={step.contentType}
              content={step.content}
              alt={step.title}
            />

            <motion.p
              className="text-white text-center text-[16px] font-[400] max-w-2xl mb-12 tracking-tight max-w-[420px]"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ delay:1.2, duration: 2.2 }}
            >
              {step.description}
            </motion.p>

            <motion.div
              className="relative w-full flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
            >
              <ContinueButton onClick={onNext} label={step.actionLabel} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}