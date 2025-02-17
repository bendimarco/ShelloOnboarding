import Link from 'next/link'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'

interface HelpLinkProps {
    label: string;
  }

export function HelpLink({ label }: HelpLinkProps) {
    return (
    <Link
        href="/faq"
        target="_blank"
        className="flex items-center justify-center"
    >
        <span className="text-[#FFCA8B] hover:text-white/100 transition-colors mt-4 text-xs cursor-pointer">
        {label}
        </span>
    </Link>
    );
  }