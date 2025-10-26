'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function TopBar() {
  return (
    <div className="fixed top-0 left-[298px] right-0 h-[77px] bg-transparent z-30">
      <div className="max-w-[1537px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Game Selector */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#112118] h-[41px] px-6 rounded-[10px] border border-[#1e3126] flex items-center gap-3 group"
        >
          <div className="w-[23px] h-[23px] bg-white rounded-[6px] border border-[#1e3126]" />
          <span className="text-white text-[11px] font-['Poppins']">Select Game</span>
          <ChevronDown className="w-4 h-4 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <div className="flex items-center gap-4">
          {/* Language/Currency Selector */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#030c08] h-[43px] px-6 rounded-[12px] border border-[rgba(107,118,133,0.11)] flex items-center gap-3"
          >
            {/* US Flag */}
            <div className="w-[22px] h-[22px] rounded-full overflow-hidden">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect width="22" height="22" rx="7" fill="#BD3D44"/>
                <rect width="12.54" height="11.8479" fill="#192F5D"/>
              </svg>
            </div>
            <span className="text-white text-[13px] font-['Poppins']">English</span>
            <span className="text-[#606060] text-[10px] font-['Poppins']">/</span>
            <span className="text-white text-[13px] font-['Poppins']">USD</span>
          </motion.button>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#98ff7a] to-[rgba(36,221,11,0.26)] text-white hover:opacity-90 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-all rounded-[14px] px-4 h-[40px] focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
            aria-label="Login"
          >
            <span className="text-[13px] font-['Poppins']">Login</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}


