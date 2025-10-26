'use client';

import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/data/catalogue';
import imgImg546711 from "@/assets/catalogue/e5906fdefa7173426328d8d476c521ae164f0006.png";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const rarityColors: Record<string, { bg: string; gradient: string }> = {
  'Secret': { bg: 'rgba(255,187,0,0.1)', gradient: 'from-[#ffbb00] to-[#ffd971]' },
  'Ultimate': { bg: 'rgba(255,0,200,0.1)', gradient: 'from-[#ff00c8] to-[#ff5cfc]' },
  'Prismatic': { bg: 'rgba(9,0,255,0.1)', gradient: 'from-[#0900ff] to-[#8376ff]' },
  'Godly': { bg: 'rgba(255,68,0,0.1)', gradient: 'from-[#ff4400] to-[#ff7d5c]' },
  'Exclusive': { bg: 'rgba(86,173,255,0.1)', gradient: 'from-[#56adff] to-[#5cd4ff]' },
  'Mythic': { bg: 'rgba(255,86,90,0.1)', gradient: 'from-[#ff565a] to-[#993336]' },
  'Legendary': { bg: 'rgba(50,156,255,0.1)', gradient: 'from-[#329cff] to-[#6ed4ff]' },
  'Ultra rare': { bg: 'rgba(50,156,255,0.1)', gradient: 'from-[#329cff] to-[#6ed4ff]' },
  'Rare': { bg: 'rgba(255,66,50,0.1)', gradient: 'from-[#ff4232] to-[#ff7a6e]' },
  'Uncommon': { bg: 'rgba(50,156,255,0.1)', gradient: 'from-[#329cff] to-[#6ed4ff]' },
  'Common': { bg: 'rgba(50,156,255,0.1)', gradient: 'from-[#329cff] to-[#6ed4ff]' },
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const rarityStyle = rarityColors[product.rarity] || rarityColors['Rare'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="relative group"
    >
      {/* Card Background */}
      <div className="bg-[#030c08] rounded-[15px] overflow-hidden relative h-[276px] w-[234px]">
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b from-[rgba(3,8,12,0)] to-[rgba(29,53,114,0.34)] from-[44.565%] rounded-[15px]`} />
        
        {/* Product Image */}
        <div className="absolute left-1/2 top-[107px] -translate-x-1/2 w-[119px] h-[119px]">
          <img 
            src={imgImg546711} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-[20px] right-[20px] w-[32px] h-[32px] bg-gradient-to-b from-[#13e97d] to-[#00ae56] rounded-[4px] border border-[rgba(255,255,255,0.1)] flex items-center justify-center group/btn z-10"
        >
          <ShoppingCart className="w-4 h-4 text-white" />
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.2)] rounded-[4px] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
        </motion.button>

        {/* Product Info */}
        <div className="absolute left-[17px] bottom-[73px] z-10">
          <h3 className="text-white text-[13px] font-['Poppins'] mb-1">
            {product.name}
          </h3>
          
          {/* Rarity Badge */}
          <div 
            className={`inline-flex items-center gap-1 px-1 py-0.5 rounded-[6px] mb-2`}
            style={{ backgroundColor: rarityStyle.bg }}
          >
            <div className={`w-[14px] h-[14px] rounded bg-gradient-to-b ${rarityStyle.gradient}`} />
            <span className={`text-[9px] font-['Poppins'] bg-gradient-to-t ${rarityStyle.gradient} bg-clip-text text-transparent`}>
              {product.rarity}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-[16px] font-['Poppins'] bg-gradient-to-b from-[#13e97d] to-[#00ae56] bg-clip-text text-transparent">
              $ {product.price.toFixed(2)}
            </span>
            <span className="text-[#bababa] text-[10px] font-['Poppins'] line-through opacity-60">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-[189.5px] right-[20px] bg-[rgba(255,66,50,0.1)] px-1 py-0.5 rounded-[6px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <span className="text-[#ff4232] text-[12px] font-['Poppins']">
            -{product.discount}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}


