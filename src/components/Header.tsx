"use client";

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "figma:asset/facd60659fd11ee898b4bc3ba30a98c0b406d41d.png";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#06100a] border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[103px] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="RoCart Logo" className="h-[43px] w-[43px]" />
            <span className="text-white text-[25px] font-bold tracking-[-0.5px]">RoCart Affiliates</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <Link
              to="/catalogue"
              aria-label="View the catalogue"
              className="text-white px-4 py-2.5 rounded-[14px] hover:bg-white/5 transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
            >
              Catalogue
            </Link>
            <button className="text-white px-4 py-2.5 rounded-[14px] hover:bg-white/5 transition-colors">
              Sign In
            </button>
            <Button className="bg-gradient-to-r from-[#98ff7a] to-[rgba(36,221,11,0.26)] text-white hover:opacity-90 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-all rounded-[14px] px-4 h-[40px]">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
