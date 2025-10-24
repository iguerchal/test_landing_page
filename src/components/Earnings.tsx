"use client";

import { motion } from "motion/react";
import { Award, DollarSign, TrendingUp, Users } from "lucide-react";
import { stats } from "../data/stats";
import { Badge } from "./ui/badge";

const iconMap: Record<string, any> = {
  Eye: Award,
  Percent: DollarSign,
  TrendingUp,
  Users
};

const statStyles = [
  { from: "rgba(0, 188, 125, 0.07)", to: "rgba(0, 188, 125, 0.07)", iconFrom: "#00bc7d", iconTo: "#00bba7", metric: "+15% this month" },
  { from: "rgba(43, 127, 255, 0.1)", to: "rgba(43, 127, 255, 0.1)", iconFrom: "#1f8ef4", iconTo: "#0babe4", metric: "Industry leading" },
  { from: "rgba(255, 248, 43, 0.1)", to: "rgba(255, 248, 43, 0.1)", iconFrom: "#ffe62b", iconTo: "#f6ff79", metric: "Growing daily" },
  { from: "rgba(212, 0, 0, 0.07)", to: "rgba(212, 0, 0, 0.07)", iconFrom: "#bc0000", iconTo: "#ff4d4d", metric: "New weekly" }
];

export default function Earnings() {
  return (
    <section className="py-24 bg-[#06100a] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[rgba(70,255,77,0.016)] to-[rgba(54,255,43,0.016)] rounded-full blur-[32px]" />
        <div className="absolute left-[480px] top-[248.38px] w-[288px] h-[288px] bg-[rgba(70,193,255,0.1)] rounded-full blur-[32px]" />
        <div className="absolute right-[480px] bottom-[248.87px] w-[384px] h-[384px] bg-[rgba(43,127,255,0.1)] rounded-full blur-[32px]" />
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
          <Badge className="mb-6 bg-[#133b12] border border-[#143b12] text-[#b2ffc0] hover:opacity-90 rounded-full px-4 py-2 inline-flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.6667 4.66667L9 10.3333L5.66667 7L1.33333 11.3333M10.6667 4.66667H14.6667V8.66667" stroke="#B2FFC0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Proven Earning Potential
          </Badge>

          <h2 className="mb-6 text-[54.5px] leading-[60px]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#d0fae5] to-[#ffffff]">Your Earning</span><br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7ef064] to-[#70fe5a]">Potential</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.7)] text-[21px] leading-[39px] max-w-[768px] mx-auto">
            See the real numbers behind our creator success stories and understand your earning potential
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1280px] mx-auto mb-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            const style = statStyles[index];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                style={{
                  backgroundImage: `linear-gradient(130.67deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, ${style.from} 0%, ${style.to} 100%)`
                }}
              >
                {/* Icon */}
                <div 
                  className="mb-6 inline-flex p-4 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${style.iconFrom}, ${style.iconTo})`
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <div className="text-white text-[18.4px] leading-[28px] mb-4 font-bold">{stat.title}</div>

                {/* Value */}
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d440] to-[#cfffd8] text-[34px] leading-[40px] font-bold mb-2">{stat.value}</div>

                {/* Description */}
                <div className="text-[rgba(255,255,255,0.7)] text-[12.3px] leading-[22.75px] mb-4">{stat.description}</div>

                {/* Metric */}
                <div className="border-t border-[rgba(255,255,255,0.1)] pt-4 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3.5 3.5H8.5V8.5M3.5 8.5L8.5 3.5" stroke="#B2FFC0" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#b2ffc0] text-[12.5px] leading-[20px]">{style.metric}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button className="backdrop-blur-sm bg-[#133b12] border border-[#133b12] text-[#9ee6aa] hover:opacity-90 transition-all rounded-full px-6 py-3 inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-[#b2ffc0] rounded-full" />
            <span className="text-[12.4px] leading-[20px]">Ready to start earning?</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
