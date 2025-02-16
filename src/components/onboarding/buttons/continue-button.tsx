interface ContinueButtonProps {
    onClick: () => void;
    label: string;
  }
  
  export function ContinueButton({ onClick, label }: ContinueButtonProps) {
    return (
      <button
        onClick={onClick}
        className="relative w-40 h-12 rounded-full group overflow-hidden brightness-100 hover:brightness-125 transition-[0.4s] shadow-[0_0_16px_rgba(255,255,255,0)] hover:shadow-[0_0_16px_rgba(255,255,255,0.2)]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #999999 100%)',
          padding: '1px',
        }}
      >
        <div 
          className="absolute inset-0 rounded-full" 
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #464646 100%)',
            content: '""',
            zIndex: -1,
          }}
        />
        
        <div 
          className="absolute inset-[1px] rounded-full flex items-center justify-center font-[500] text-black text-[14px]"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #999999 100%)',
            boxShadow: 'inset 4px 4px 4px #FFFFFF66, inset -4px -4px 4px #00000033'
          }}
        >
          {label}
        </div>
      </button>
    );
  }