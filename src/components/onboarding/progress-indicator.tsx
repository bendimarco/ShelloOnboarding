import Image from "next/image";
import { ArrowLeft } from 'lucide-react'

interface ProgressIndicatorProps {
    currentStep: number;
    totalSteps: number;
    isFirstStep: boolean;
    onBack?: () => void;
  }
  
  export function ProgressIndicator({ currentStep, totalSteps, isFirstStep, onBack }: ProgressIndicatorProps) {
    return (
      <div className="flex w-[75%] mx-auto items-center gap-4">
        {/* Step counter */}
        {isFirstStep ? (
                <Image width={64} height={12} src={"/images/shello_logo.svg"} alt={"Shello Logo"}/>
        ) : (
          <button 
            onClick={onBack}
            className="text-white"
          >
            <ArrowLeft size={18} />
          </button>
        )}
  
        {/* Progress bar */}
        <div className="w-full bg-white/10 h-0.5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <div className="text-xs whitespace-nowrap text-white/50">
          Step {currentStep + 1} / {totalSteps}
        </div>
      </div>
    )
  }