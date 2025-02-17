import { Suspense } from 'react'
import { OnboardingStepController } from '../../components/onboarding/steps/onboarding-step-controller'

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div className="bg-black">Loading...</div>}>
      <OnboardingStepController />
    </Suspense>
  )
}