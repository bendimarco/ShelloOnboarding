import { motion } from 'framer-motion';
import Image from 'next/image';
import { ContentType } from '../../../types/index';
import { useEffect, useRef } from 'react';

interface OnboardingMediaProps {
    contentType: ContentType;
    content: string;
    alt: string;
  }

export function OnboardingMedia({ contentType, content, alt }: OnboardingMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when mounted and when content changes
    if (contentType === 'video' && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [contentType, content]);

  if (contentType === 'none') {
    return null;
  }

  return (
    <motion.div
      className="w-full max-w-[400px] aspect-square mb-12 relative sm:h-[35vh] h-[25vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.2 }}
    >
      <div className="relative w-full h-full">
        {contentType === 'image' ? (
          <Image
            src={content}
            alt={alt}
            fill
            priority={true}  // Forces preload of image
            loading="eager"  // Immediately loads the image
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <video
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"  // Forces video preload
          src={content}
          >
            {/* Add a fallback poster image */}
            <source src={content} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
        {/* Left fade */}
        <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent" />
        {/* Right fade */}
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent" />
      </div>
    </motion.div>
  );
}