'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { OnboardingStepContent } from './onboarding-step-content'
import { onboardingSteps } from '../../../constants/onboarding-steps'

export function OnboardingStepController() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepParam = searchParams.get('step')
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  useEffect(() => {
    const stepFromUrl = onboardingSteps.findIndex(step => step.id === stepParam)
    if (stepFromUrl >= 0) {
      setCurrentStepIndex(stepFromUrl)
    }
  }, [stepParam])

  const isLastStep = currentStepIndex === onboardingSteps.length - 1
  const isFirstStep = currentStepIndex === 0

  const handleNext = () => {
    if (!isLastStep) {
      const nextIndex = currentStepIndex + 1
      router.push(`/onboarding?step=${onboardingSteps[nextIndex].id}`)
    }
  }

  const handleBack = () => {
    if (!isFirstStep) {
      const prevIndex = currentStepIndex - 1
      router.push(`/onboarding?step=${onboardingSteps[prevIndex].id}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <OnboardingStepContent 
        step={onboardingSteps[currentStepIndex]}
        onNext={handleNext}
        onBack={handleBack}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        currentStepIndex={currentStepIndex}
        totalSteps={onboardingSteps.length}
      />
    </div>
  )
}