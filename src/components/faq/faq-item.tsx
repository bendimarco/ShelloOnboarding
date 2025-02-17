"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <h2 className="sm:text-[18px] text-[14px] font-[400] text-white tracking-tighter leading-tight text-center mb-2">{question}</h2>
        {isOpen ? <Minus className="text-[#D9D9D9]/50" /> : <Plus className="text-white/50" />}
      </button>

      <AnimatePresence>
        {isOpen && (
            <p className="sm:text-[18px] text-[14px] font-[400] text-[#D9D9D9]/50 tracking-tighter mb-6">
              {answer}
            </p>
        )}
      </AnimatePresence>
    </div>
  );
}