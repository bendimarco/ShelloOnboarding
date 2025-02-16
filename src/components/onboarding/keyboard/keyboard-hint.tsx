import { KeyboardKey } from './keyboard-key'
import { motion } from 'framer-motion'

interface KeyboardHintProps {
    direction: 'next' | 'back';
    opacity: number;
  }
  
  export function KeyboardHint({ direction, opacity }: KeyboardHintProps) {
    const isNext = direction === 'next';
    
    return (
      <motion.div
        className={`flex items-center gap-3 text-xs ${
          isNext ? 'flex-row' : 'flex-row-reverse'
        }`}
        animate={{ opacity }}
        transition={{ duration: 1 }}
      >
        <div className="relative text-white">
          <KeyboardKey direction={isNext ? 'right' : 'left'} />
        </div>
        <span className="font-light text-white">{isNext ? 'Next' : 'Back'}</span>
      </motion.div>
    );
  }