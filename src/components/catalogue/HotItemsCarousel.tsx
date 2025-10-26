'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { ProductCard } from './ProductCard';
import { Product } from '@/data/catalogue';

interface HotItemsCarouselProps {
  items: Product[];
}

export function HotItemsCarousel({ items }: HotItemsCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [0, -((items.length * 250))],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }
        }
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls, items.length]);

  return (
    <section className="mb-12 overflow-hidden">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          {/* Fire Icon */}
          <div className="w-[29px] h-[27px] flex items-center justify-center">
            <div className="w-[27.067px] h-[27.067px] bg-gradient-to-b from-[#ff867c] to-[#ff4232] rounded-[6px]" />
          </div>
          <h2 className="text-white text-[20px] font-['Poppins']">Hot Items</h2>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={controls}
          className="flex gap-6"
          style={{ width: 'fit-content' }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex-shrink-0">
              <ProductCard product={item} index={index % items.length} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


