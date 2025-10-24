"use client";

import { motion } from "motion/react";
import { DollarSign, Award, Users, Network, Zap, Shield } from "lucide-react";
import { features } from "../data/features";
import { Badge } from "./ui/badge";

const iconMap: Record<string, any> = {
  DollarSign,
  Award,
  Users,
  Network,
  Zap,
  Shield
};

const gradientStyles = [
  { from: "rgba(110, 49, 49, 0.2)", to: "rgba(110, 49, 49, 0.2)", iconFrom: "#f72222", iconTo: "#de0505", badge: "Industry Leading" },
  { from: "rgba(250, 147, 1, 0.2)", to: "rgba(250, 147, 1, 0.2)", iconFrom: "#f5a300", iconTo: "#ff8200", badge: "5% Rate" },
  { from: "rgba(43, 127, 255, 0.1)", to: "rgba(43, 127, 255, 0.1)", iconFrom: "#2b7fff", iconTo: "#00b8db", badge: "1000+ Active" },
  { from: "rgba(0, 201, 80, 0.1)", to: "rgba(0, 201, 80, 0.1)", iconFrom: "#00c65a", iconTo: "#00bc7a", badge: "Top Tier" },
  { from: "rgba(143, 42, 79, 0.2)", to: "rgba(143, 42, 79, 0.2)", iconFrom: "#bb4af0", iconTo: "#e83eaf", badge: "Quick Start", borderColor: "rgba(43,255,57,0.2)" },
  { from: "rgba(201, 184, 0, 0.1)", to: "rgba(201, 184, 0, 0.1)", iconFrom: "#c9b100", iconTo: "#bcb600", badge: "100% Secure" }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#06100a] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[rgba(70,255,70,0.05)] to-[rgba(43,255,68,0.05)] rounded-full blur-[32px]" />
        <div className="absolute left-[480px] top-[311.75px] w-[288px] h-[288px] bg-[rgba(43,39,34,0.33)] rounded-full blur-[32px]" />
        <div className="absolute right-[480px] bottom-[311.75px] w-[384px] h-[384px] bg-[rgba(255,237,43,0.05)] rounded-full blur-[32px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1280px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-gradient-to-r from-[#193f15] to-[#0d3711] border border-[#8aff7a] text-[#b2ffc0] hover:opacity-90 rounded-full px-4 py-2 inline-flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.68333 1.53L9.85667 4.64933C9.95812 4.85464 10.1079 5.03227 10.2931 5.16697C10.4783 5.30167 10.6934 5.38941 10.92 5.42267L14.364 5.92667L12.0693 8.95467C11.9051 9.11473 11.7822 9.31232 11.7112 9.53042C11.6403 9.74852 11.6234 9.98059 11.662 10.2067L12.25 13.6333L8.65733 12.388C8.45448 12.2815 8.22879 12.2258 7.99967 12.2258C7.77055 12.2258 7.54485 12.2815 7.342 12.388L4.264 14.0067L5.338 10.2073L3.93067 8.95467L1.44 6.53L5.07933 5.42267L7.68333 1.53Z" stroke="#85FF7A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Why Choose Us
          </Badge>

          <h2 className="mb-6 text-[53.8px] leading-[60px]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#f3e8ff] to-[#ffffff]">Why Creators</span><br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#98ff79] to-[#69ff54]">Choose Us</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.7)] text-[21.4px] leading-[39px] max-w-[768px] mx-auto">
            We provide the highest payouts, best support, and most reliable platform for Roblox content creators
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const style = gradientStyles[index];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                style={{
                  backgroundImage: `linear-gradient(147.309deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, ${style.from} 0%, ${style.to} 100%)`,
                  borderColor: style.borderColor || undefined
                }}
              >
                {/* Badge */}
                {index < 3 && (
                  <div className="absolute -top-3 left-8 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-full px-3 py-2">
                    <span className="text-[rgba(255,255,255,0.8)] text-[10.7px] leading-[16px]">{style.badge}</span>
                  </div>
                )}
                {index >= 3 && (
                  <div className="absolute -top-3 left-8 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-full px-3 py-2">
                    <span className="text-[rgba(255,255,255,0.8)] text-[10.7px] leading-[16px]">{style.badge}</span>
                  </div>
                )}

                {/* Icon */}
                <div 
                  className="mb-6 inline-flex p-4 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${style.iconFrom}, ${style.iconTo})`
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-white text-[21.4px] leading-[32px] mb-4">{feature.title}</h3>
                <p className="text-[rgba(255,255,255,0.7)] text-[16px] leading-[29.25px]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <button className="backdrop-blur-sm bg-gradient-to-r from-[#163d14] to-[#103912] text-white border border-[#00c950] hover:opacity-90 transition-all rounded-[16px] px-8 py-4 inline-flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6667 10.8333C16.6667 15 13.75 17.0833 10.2833 18.2917C10.1018 18.3532 9.90461 18.3502 9.725 18.2833C6.25 17.0833 3.33333 15 3.33333 10.8333V5C3.33333 4.77899 3.42113 4.56703 3.57741 4.41074C3.73369 4.25446 3.94565 4.16667 4.16667 4.16667C5.83333 4.16667 7.91667 3.16667 9.36667 1.9C9.54321 1.74917 9.76779 1.66629 10 1.66629C10.2322 1.66629 10.4568 1.74917 10.6333 1.9C12.0917 3.175 14.1667 4.16667 15.8333 4.16667C16.0543 4.16667 16.2663 4.25446 16.4226 4.41074C16.5789 4.56703 16.6667 4.77899 16.6667 5V10.8333Z" stroke="#7EF374" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[13.9px] leading-[24px]">Join thousands of successful creators today!</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
