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

  // Handle all URL-based step updates in this effect
  useEffect(() => {
    const stepFromUrl = onboardingSteps.findIndex(step => step.id === stepParam)
    if (stepFromUrl >= 0) {
      setCurrentStepIndex(stepFromUrl)
    } else if (!stepParam) {
      // If no step in URL, set to first step
      router.push(`/onboarding?step=${onboardingSteps[0].id}`)
    }
  }, [stepParam, router])

  const handleNext = () => {
    if (currentStepIndex < onboardingSteps.length - 1) {
      const nextIndex = currentStepIndex + 1
      router.push(`/onboarding?step=${onboardingSteps[nextIndex].id}`)
    } else {
      router.push('/')
    }
  }

  const handleBack = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1
      router.push(`/onboarding?step=${onboardingSteps[prevIndex].id}`)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <OnboardingStepContent 
        step={onboardingSteps[currentStepIndex]}
        onNext={handleNext}
        onBack={handleBack}
        isFirstStep={currentStepIndex === 0}
        currentStepIndex={currentStepIndex}
        totalSteps={onboardingSteps.length}
      />
    </div>
  )
}