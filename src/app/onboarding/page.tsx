import { Suspense } from 'react'
import { OnboardingStepController } from '../../components/onboarding/onboarding-step-controller'

export const dynamicParams = false;
export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ slug: 'onboarding' }];
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <OnboardingStepController />
    </Suspense>
  )
}