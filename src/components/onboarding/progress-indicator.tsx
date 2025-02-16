interface ProgressIndicatorProps {
    currentStep: number;
    totalSteps: number;
  }
  
  export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
    return (
      <div className="flex w-[75%] mx-auto items-center gap-4">
        {/* Step counter */}
        <div className="text-xs whitespace-nowrap">
          Step {currentStep + 1} / {totalSteps}
        </div>
        {/* <div className="text-xs whitespace-nowrap">Shello ●</div> */}
  
        {/* Progress bar */}
        <div className="w-full bg-white/10 h-0.5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* <div className="text-xs whitespace-nowrap">
          Step {currentStep + 1} / {totalSteps}
        </div> */}
         {/* <div className="text-xs whitespace-nowrap">Shello ●</div> */}
      </div>
    )
  }