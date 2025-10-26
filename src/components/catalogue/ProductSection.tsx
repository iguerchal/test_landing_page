'use client';

import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '@/data/catalogue';

interface ProductSectionProps {
  title: string;
  icon?: React.ReactNode;
  products: Product[];
  showViewAll?: boolean;
}

export function ProductSection({ title, icon, products, showViewAll = true }: ProductSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <h2 className="text-white text-[20px] font-['Poppins']">{title}</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button className="w-[30px] h-[30px] bg-[#030904] rounded-[9px] border border-[rgba(153,153,153,0.17)] flex items-center justify-center hover:bg-[#13e97d]/10 transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#3dff88]" />
            </button>
            <button className="w-[30px] h-[30px] bg-[#030904] rounded-[9px] border border-[rgba(153,153,153,0.17)] flex items-center justify-center hover:bg-[#13e97d]/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-[#3dff88]" />
            </button>
          </div>

          {/* View All Button */}
          {showViewAll && (
            <button className="h-[26px] px-4 bg-[#030904] rounded-[9px] border border-[rgba(153,153,153,0.17)] text-white text-[11px] font-['Poppins'] hover:bg-[#13e97d]/10 transition-colors">
              View All
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-[12px] bg-[#030904] rounded-[20px] border border-[rgba(153,153,153,0.17)] relative overflow-hidden">
          <div className="absolute h-full w-[33%] bg-gradient-to-r from-[#3dff88] to-[#259951] rounded-[20px]" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-6 gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </motion.section>
  );
}


