"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import imgBackground from "figma:asset/9635c4e5afd7af5627392172102618467404b70c.png";
import imgInstagram from "figma:asset/8272bc8d8e8d8aba158cfcd521a58ff81b82c298.png";
import imgTiktok from "figma:asset/609ea35fa797c672d73f75a2097accb83355e62e.png";
import imgYoutube from "figma:asset/6cd0fa4d977a688cb748ee98298b52c61dba6ac4.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06100a] pt-[160px] pb-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[rgba(70,255,104,0.05)] to-[rgba(43,255,89,0.05)] rounded-full blur-[32px] opacity-[0.68]" />
        <div className="absolute left-[480px] top-[173.75px] w-[384px] h-[384px] bg-[rgba(70,255,77,0.1)] rounded-full blur-[32px]" />
        <div className="absolute right-[480px] bottom-[173.75px] w-[320px] h-[320px] bg-[rgba(54,255,43,0.04)] rounded-full blur-[32px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1536px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <Badge className="mb-8 bg-gradient-to-r from-[rgba(107,255,70,0.2)] to-[rgba(43,255,50,0.16)] backdrop-blur-sm text-[#e9d4ff] border border-[rgba(70,255,83,0.3)] hover:bg-gradient-to-r hover:from-[rgba(107,255,70,0.3)] hover:to-[rgba(43,255,50,0.26)] rounded-full px-6 py-3 inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8aff7a] rounded-full" />
              Trusted by 1000+ Roblox Creators
            </Badge>

            <h1 className="mb-8 text-[66.9px] leading-[90px]">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#f3e8ff] to-[#ffffff]">Monetize Your</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#99ff7a] to-[#65ff51]">Roblox Content</span>
            </h1>

            <p className="text-[rgba(255,255,255,0.8)] text-[21.4px] leading-[39px] mb-8 max-w-[672px]">
              Transform your Roblox creations into a sustainable income stream. Join the premier platform for content creators.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.60417 1.9125L12.3208 5.81167C12.4476 6.06831 12.6348 6.29034 12.8664 6.45871C13.0979 6.62708 13.3668 6.73676 13.65 6.77833L17.955 7.40833L15.0867 11.1933C14.8813 11.3934 14.7277 11.6404 14.639 11.913C14.5503 12.1856 14.5292 12.4757 14.5775 12.7583L15.3125 17.0417L10.8217 15.485C10.5681 15.3519 10.286 15.2823 9.99958 15.2823C9.71318 15.2823 9.43107 15.3519 9.1775 15.485L5.33 17.5083L6.68833 13.0417" stroke="#FCC800" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[rgba(255,255,255,0.7)] text-[12.3px]">Premium Payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.8841 12.5 10 12.5H5C4.11595 12.5 3.2681 12.8512 2.64298 13.4763C2.01786 14.1014 1.66667 14.9493 1.66667 15.8333V17.5M7.5 9.16667C9.34095 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34095 2.5 7.5 2.5C5.65905 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65905 9.16667 7.5 9.16667Z" stroke="#51A2FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[rgba(255,255,255,0.7)] text-[12.6px]">Creator Network</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.3333 5.83333L11.25 12.9167L7.08333 8.75L1.66667 14.1667M13.3333 5.83333H18.3333V10.8333" stroke="#05DF72" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[rgba(255,255,255,0.7)] text-[12.6px]">Growth Tools</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-[#56ff46] to-[#004308] text-white hover:opacity-90 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all rounded-[14px] px-8 h-[44px] group">
              Start Earning Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative backdrop-blur-md border border-[rgba(255,255,255,0.2)] rounded-[24px] p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[512px]">
              {/* Growth Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#00c950] to-[#00bc7d] text-white px-4 py-2 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                <span className="text-[13.3px] leading-[20px]">+127% Growth</span>
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={imgBackground} alt="" className="w-[23px] h-[28px]" />
                  <div>
                    <h3 className="text-white text-[14.4px] leading-[24px]">RoCart Affiliate</h3>
                    <p className="text-[rgba(255,255,255,0.6)] text-[12.1px] leading-[20px]">Content Creator!</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#05df72] text-[18px] leading-[28px] font-bold">$1,247</div>
                  <div className="text-[rgba(255,255,255,0.6)] text-[12.5px] leading-[20px]">This month</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[rgba(255,255,255,0.1)]">
                <div className="text-center">
                  <div className="text-white text-[19.5px] leading-[28px] font-bold">2.4M</div>
                  <div className="text-[rgba(255,255,255,0.6)] text-[10.5px] leading-[16px]">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-[20px] leading-[28px] font-bold">156</div>
                  <div className="text-[rgba(255,255,255,0.6)] text-[10.7px] leading-[16px]">Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-[18.8px] leading-[28px] font-bold">$3.2K</div>
                  <div className="text-[rgba(255,255,255,0.6)] text-[10.3px] leading-[16px]">Total Earned</div>
                </div>
              </div>

              {/* Floating Platform Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4"
              >
                <img src={imgYoutube} alt="YouTube" className="w-[43px] h-[43px] rounded-lg shadow-lg" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-8 bottom-1/4"
              >
                <img src={imgInstagram} alt="Instagram" className="w-[36px] h-[36px] rounded-lg shadow-lg" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-1/2 -translate-x-1/2 -top-8"
              >
                <img src={imgTiktok} alt="TikTok" className="w-[48px] h-[48px] rounded-lg shadow-lg" />
              </motion.div>

              {/* Rating Badge */}
              <div className="absolute -bottom-4 -left-4 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-full px-4 py-2 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                <span className="text-white text-[13.5px] leading-[20px]">⭐ 4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
