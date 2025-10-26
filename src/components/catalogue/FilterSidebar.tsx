'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown } from 'lucide-react';
import img9055448 from "@/assets/catalogue/968fbf0c43d6f08f2bca4f8b7167fea346e86e9a.png";
import { rarityOptions } from '@/data/catalogue';

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 505]);
  const [isRarityExpanded, setIsRarityExpanded] = useState(true);
  const [selectedRarities, setSelectedRarities] = useState<string[]>([]);

  const handleRarityToggle = (rarity: string) => {
    setSelectedRarities(prev => 
      prev.includes(rarity) 
        ? prev.filter(r => r !== rarity)
        : [...prev, rarity]
    );
  };

  const handleReset = () => {
    setPriceRange([0, 505]);
    setSelectedRarities([]);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-[298px] bg-[#030c08] overflow-y-auto z-40"
    >
      <div className="p-7">
        {/* Logo */}
        <div className="flex justify-center mb-8 mt-4">
          <img src={img9055448} alt="RoCart" className="h-[27px] w-auto" />
        </div>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white text-[13px] font-['Poppins']">Filter items</span>
            <div className="bg-[#13e97d] rounded-[8px] px-2 py-0.5 text-white text-[13px] font-['Poppins']">
              43
            </div>
          </div>
          <button 
            onClick={handleReset}
            className="text-[#13e97d] text-[10px] font-['Poppins'] hover:underline"
          >
            Reset
          </button>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-[rgba(255,255,255,0.53)] text-[10px] font-['Poppins'] mb-4">
            Item price
          </h3>
          
          <div className="flex gap-3 mb-4">
            <div>
              <label className="text-[rgba(255,255,255,0.53)] text-[10px] font-['Poppins'] block mb-2">
                From
              </label>
              <div className="bg-[#141d15] rounded-[13px] h-[41px] w-[108px] flex items-center justify-center">
                <span className="text-[rgba(136,145,140,0.56)] text-[13px] font-['Poppins']">
                  min $0.25
                </span>
              </div>
            </div>
            <div>
              <label className="text-[rgba(255,255,255,0.53)] text-[10px] font-['Poppins'] block mb-2">
                To
              </label>
              <div className="bg-[#141d15] rounded-[13px] h-[41px] w-[108px] flex items-center justify-center">
                <span className="text-[rgba(136,145,140,0.56)] text-[13px] font-['Poppins']">
                  max $ 2000
                </span>
              </div>
            </div>
          </div>

          {/* Custom Range Slider */}
          <div className="relative mb-2">
            <div className="h-[12px] bg-[#030904] rounded-[20px] border border-[rgba(153,153,153,0.17)] relative">
              <div 
                className="absolute h-full bg-gradient-to-r from-[#3dff88] to-[#259951] rounded-[20px]"
                style={{ width: `${(priceRange[1] / 1539) * 100}%` }}
              />
            </div>
            <div className="absolute -top-2 flex justify-between w-full">
              <div className="w-[15px] h-[15px] bg-[#13e97d] rounded-full border-2 border-[#030c08]" 
                   style={{ left: `${(priceRange[0] / 1539) * 100}%` }} />
              <div className="w-[15px] h-[15px] bg-[#13e97d] rounded-full border-2 border-[#030c08]" 
                   style={{ left: `${(priceRange[1] / 1539) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#373737] rounded-[8px] mb-6 w-[246px]" />

        {/* Rarity Filter */}
        <div className="mb-6">
          <button
            onClick={() => setIsRarityExpanded(!isRarityExpanded)}
            className="flex items-center justify-between w-full mb-4 group"
          >
            <span className="text-white text-[11px] font-['Poppins']">Rarity</span>
            <ChevronDown 
              className={`w-4 h-4 text-[#336239] transition-transform ${isRarityExpanded ? 'rotate-180' : ''}`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{ height: isRarityExpanded ? 'auto' : 0 }}
            className="overflow-hidden space-y-3"
          >
            {rarityOptions.map((rarity) => (
              <label
                key={rarity.name}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Checkbox
                  checked={selectedRarities.includes(rarity.name)}
                  onCheckedChange={() => handleRarityToggle(rarity.name)}
                  className="bg-[#141d15] border-none rounded-[5px] data-[state=checked]:bg-[#13e97d]"
                />
                <div className={`w-[14px] h-[14px] rounded bg-gradient-to-b ${rarity.gradient}`} />
                <span className="text-white text-[11px] font-['Poppins'] flex-1">
                  {rarity.name}
                </span>
                <span className="text-[#989898] text-[8px] font-['Poppins']">
                  ({rarity.count})
                </span>
              </label>
            ))}
          </motion.div>
        </div>

        {/* Confirm Button */}
        <button className="w-full h-[43px] bg-gradient-to-b from-[#13e97d] to-[#00ae56] rounded-[13px] text-white text-[12px] font-['Poppins'] mb-3 hover:opacity-90 transition-opacity">
          Confirm
        </button>

        {/* Clear All Button */}
        <button className="w-full h-[43px] bg-[#141d15] rounded-[13px] border border-[#313131] text-white text-[12px] font-['Poppins'] hover:bg-[#1a2319] transition-colors">
          Clear all
        </button>

        {/* Footer Disclaimer */}
        <div className="mt-12 text-[rgba(102,102,102,0.44)] text-[11.1px] font-['Poppins'] leading-[18px] text-center">
          <p className="mb-2">
            RoPlaza is not affiliated, associated, or partnered with UpliftGames LLC and Roblox Corporation in any way.
          </p>
          <p className="mb-2">
            We are not authorized, endorsed, or sponsored by Uplift Games LLC and Roblox Corporation.
          </p>
        </div>

        <div className="mt-6 text-[rgba(107,118,133,0.45)] text-[12px] font-['Poppins'] text-center">
          © 2020-2025 RoPlaza All Rights Reserved
        </div>
      </div>
    </motion.aside>
  );
}


