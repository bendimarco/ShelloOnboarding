import { motion } from 'framer-motion';

interface BackgroundGradientsProps {
  color: string;
}

export function BackgroundGradients({ color }: BackgroundGradientsProps) {
  return (
    <>
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none md:block hidden"
        animate={{
          background: `linear-gradient(90deg, ${color} 0%, rgba(0,0,0,1) 100%)`
        }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none md:block hidden"
        animate={{
          background: `linear-gradient(270deg, ${color} 0%, rgba(0,0,0,1) 100%)`
        }}
        transition={{ duration: 2 }}
      />
    </>
  );
}