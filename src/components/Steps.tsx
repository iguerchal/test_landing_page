"use client";

import React from "react";
import { motion } from "motion/react";
import { UserPlus, Link as LinkIcon, TrendingUp } from "lucide-react";
import { steps } from "../data/steps";
import { Badge } from "./ui/badge";

const iconMap: Record<string, any> = {
  UserPlus,
  Link: LinkIcon,
  TrendingUp
};

const stepStyles = [
  { from: "rgba(43, 127, 255, 0.1)", to: "rgba(43, 127, 255, 0.1)", iconFrom: "#2b7fff", iconTo: "#00b8db", badge: "Instant Access" },
  { from: "rgba(152, 152, 152, 0.1)", to: "rgba(152, 152, 152, 0.1)", iconFrom: "#929292", iconTo: "#dbdbdb", badge: "Multi-Platform" },
  { from: "rgba(0, 201, 80, 0.1)", to: "rgba(0, 201, 80, 0.1)", iconFrom: "#00c361", iconTo: "#00bd75", badge: "Reliable Payouts" }
];

export default function Steps() {
  return (
    <section className="py-24 bg-[#06100a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[rgba(80,255,70,0.024)] to-[rgba(54,255,43,0.024)] rounded-full blur-[32px]" />
        <div className="absolute left-[480px] top-[245.94px] w-[288px] h-[288px] bg-[rgba(70,150,255,0.1)] rounded-full blur-[32px]" />
        <div className="absolute right-[480px] bottom-[246.44px] w-[384px] h-[384px] bg-[rgba(43,127,255,0.1)] rounded-full blur-[32px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1280px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-gradient-to-r from-[#153c13] to-[#113912] border border-[#153c13] text-[#b2ffc0] hover:opacity-90 rounded-full px-4 py-2 inline-flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.62467 10.3333C6.56515 10.1026 6.44489 9.89207 6.27641 9.72359C6.10793 9.55511 5.89738 9.43485 5.66667 9.37533L1.57667 8.32067M8.32133 1.57667L9.37533 5.66667C9.43485 5.89738 9.55511 6.10793 9.72359 6.27641C9.89207 6.44489 10.1026 6.56515 10.3333 6.62467L14.4233 7.67867M7.67867 14.4233L6.62467 10.3333M13.3333 2V4.66667M14.6667 3.33333H12M2.66667 11.3333V12.6667M3.33333 12H2" stroke="#B2FFC0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Simple 3-Step Process
          </Badge>

          <h2 className="mb-6 text-[57.5px] leading-[60px]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#f3e8ff] to-[#ffffff]">How It</span><br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8afe6e] to-[#70ff5a]">Works</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.7)] text-[21.6px] leading-[39px] max-w-[768px] mx-auto">
            Start earning from your Roblox content in just three simple steps. Our streamlined process gets you up and running in minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 max-w-[1152px] mx-auto mb-20">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const style = stepStyles[index];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Badge */}
                <div className="absolute -top-3 left-8 z-10 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-full px-3 py-2">
                  <span className="text-[rgba(255,255,255,0.8)] text-[10.7px] leading-[16px]">{style.badge}</span>
                </div>

                <div 
                  className="relative backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                  style={{
                    backgroundImage: `linear-gradient(140.589deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, ${style.from} 0%, ${style.to} 100%)`
                  }}
                >
                  {/* Step Number Badge (inside card) */}
                  <div className="absolute z-10 bg-gradient-to-r from-[#3dff88] to-[rgba(5, 44, 21, 0.22)] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" style={{ top: 12, right: 12 }}>
                    <span className="font-bold text-[14px] leading-[20px]">0{step.id}</span>
                  </div>
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
                  <h3 className="text-white text-[21.2px] leading-[32px] mb-4">{step.title}</h3>
                  <p className="text-[rgba(255,255,255,0.7)] text-[15.8px] leading-[29.25px]">{step.description}</p>
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <button className="backdrop-blur-sm bg-gradient-to-r from-[#143b13] to-[#133b13] text-[#b2ffc0] border border-[rgba(70,255,98,0.3)] hover:opacity-90 transition-all rounded-[16px] px-8 py-4 inline-flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.1675 8.33333C18.5481 10.2011 18.2768 12.1429 17.399 13.8348C16.5212 15.5268 15.0899 16.8667 13.3438 17.6311C11.5976 18.3955 9.64219 18.5382 7.80358 18.0353C5.96498 17.5325 4.35433 16.4145 3.24023 14.8679M7.5 9.16667L10 11.6667L18.3333 3.33333M14.1667 1.83333C12.3168 1.83304 10.5235 2.48481 9.08832 3.68044" stroke="#B2FFC0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[14.1px] leading-[24px]">Ready to start earning? Join thousands of creators!</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
