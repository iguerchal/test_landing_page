"use client";

import { motion } from "motion/react";
import { ArrowRight, Users, DollarSign } from "lucide-react";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-[#06100a] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[51px] left-[620px] w-[688px] h-[657px] bg-gradient-to-r from-[rgba(107,255,70,0.05)] to-[rgba(43,255,75,0.05)] rounded-full blur-[32px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1024px] mx-auto"
        >
          {/* CTA Card */}
          <div className="relative backdrop-blur-md border border-[rgba(255,255,255,0.2)] rounded-[24px] p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="relative z-10">
              {/* Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143b13] to-[#133b13] border border-[#94daa0] text-[#94daa0] rounded-full px-4 py-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.62467 10.3333C6.56515 10.1026 6.44489 9.89207 6.27641 9.72359C6.10793 9.55511 5.89738 9.43485 5.66667 9.37533L1.57667 8.32067M8.32133 1.57667L9.37533 5.66667C9.43485 5.89738 9.55511 6.10793 9.72359 6.27641C9.89207 6.44489 10.1026 6.56515 10.3333 6.62467L14.4233 7.67867M13.3333 2V4.66667M14.6667 3.33333H12M2.66667 11.3333V12.6667M3.33333 12H2" stroke="#94DAA0" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[12.5px] leading-[20px]">Join the Creator Revolution</span>
                </div>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h2 className="mb-6 text-[44.8px] leading-[48px]">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#f3e8ff] to-[#ffffff]">Ready to Monetize Your</span><br/>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#84ff69] to-[#72ff5b]">Roblox Content?</span>
                </h2>
                <p className="text-[rgba(255,255,255,0.7)] text-[21.4px] leading-[39px] max-w-[768px] mx-auto text-center">
                  Join our creator program and start earning from your Roblox content today. We've already paid over $250,000 to creators like you!
                </p>
              </div>

              {/* Advantages */}
              <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.8841 12.5 10 12.5H5C4.11595 12.5 3.2681 12.8512 2.64298 13.4763C2.01786 14.1014 1.66667 14.9493 1.66667 15.8333V17.5M7.5 9.16667C9.34095 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34095 2.5 7.5 2.5C5.65905 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65905 9.16667 7.5 9.16667Z" stroke="#51A2FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[rgba(255,255,255,0.7)] text-[12.5px] leading-[20px]">1000+ Active Creators</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1.66667V18.3333M14.1667 4.16667H7.91667C7.14312 4.16667 6.40125 4.47396 5.85427 5.02094C5.30729 5.56792 5 6.30979 5 7.08333C5 7.85688 5.30729 8.59875 5.85427 9.14573C6.40125 9.69271 7.14312 10 7.91667 10H12.0833C12.8569 10 13.5987 10.3073 14.1457 10.8543C14.6927 11.4013 15 12.1431 15 12.9167C15 13.6902 14.6927 14.4321 14.1457 14.9791C13.5987 15.526 12.8569 15.8333 12.0833 15.8333H5" stroke="#05DF72" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[rgba(255,255,255,0.7)] text-[12.8px] leading-[20px]">$250K+ Paid Out</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.1675 8.33333C18.5481 10.2011 18.2768 12.1429 17.399 13.8348M7.5 9.16667L10 11.6667L18.3333 3.33333" stroke="#94DAA0" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[rgba(255,255,255,0.7)] text-[12.4px] leading-[20px]">Instant Setup</span>
                </motion.div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button className="bg-gradient-to-r from-[#50f342] to-[#034a0a] text-white hover:opacity-90 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all rounded-[14px] px-8 h-[44px] group mb-4">
                  Sign Up Now & Upload Content
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-[rgba(255,255,255,0.5)] text-[12.5px] leading-[20px]">
                  No setup fees • Instant payouts • 24/7 support
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
