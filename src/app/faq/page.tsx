// src/app/faq/page.tsx
import { FAQItem } from "@/components/faq/faq-item";
import Image from "next/image";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#121212] text-[#D9D9D9] p-8 md:p-16">
      <div className="max-w-5xl lg:w-[80%] w-[100%] mx-auto">
        <Image className="mb-24" width={64} height={12} src={"/images/shello_logo.svg"} alt={"Shello Logo"}/>
        <h1 className="text-[48px] font-[500] text-white tracking-tighter leading-tight mb-8">Shello FAQs</h1>
        
        <div className="space-y-2">
          <FAQItem
            question="How long does Shello's battery last?"
            answer="Shello typically lasts 8-10 hours on a single charge with normal use."
          />
          <FAQItem
            question="What do I do if I can't pair via Bluetooth?"
            answer="To manually pair Shello, you can use the provided USB-C charging cable and use it to connect Shello to your desired device."
          />
        </div>
        <h2 className="text-[12px] font-[400] text-[#D9D9D9]/50 tracking-tighter leading-tight mb-2 mt-6">More Answers Coming Soon!</h2>
      </div>
    </div>
  );
}