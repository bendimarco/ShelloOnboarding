import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-12 w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-gray-800 transition-colors"
      aria-label="Go back"
    >
      <ArrowLeft className="w-6 h-6 text-white" />
    </button>
  );
}