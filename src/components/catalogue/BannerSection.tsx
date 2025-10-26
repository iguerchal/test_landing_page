'use client';

import { motion } from 'motion/react';
import imgRectangle20 from "@/assets/catalogue/4c5e2294da3642e92ef2a297f2930b62dc568655.png";

export function BannerSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative h-[258px] rounded-[13px] overflow-hidden mb-8 border border-[rgba(173,173,173,0.24)]"
    >
      {/* Background Image */}
      <img 
        src={imgRectangle20} 
        alt="Adopt Me Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 p-10">
        <h3 className="text-[#4d4d4d] text-[22px] font-['Poppins'] mb-4">
          Adopt Me
        </h3>
        <div className="text-[#6b7685] text-[12px] font-['Poppins'] leading-[22.75px] max-w-[504px]">
          <p>RoPlaza is not affiliated, associated, or partnered with</p>
          <p>UpliftGames LLC and Roblox Corporation in any way. We are not</p>
          <p>authorized, endorsed, or sponsored by Uplift Games LLC and Roblox</p>
          <p>Corporation.</p>
        </div>
      </div>
    </motion.div>
  );
}


