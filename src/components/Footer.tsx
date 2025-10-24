"use client";

export default function Footer() {
  return (
    <footer className="bg-[#06100a] border-t border-[rgba(255,255,255,0.1)] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-[rgba(255,255,255,0.7)] text-[12.7px] leading-[20px]">
            © 2025 RoCart Affiliates. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors text-[12.1px] leading-[20px]"
            >
              Terms of Service
            </a>
            <span className="text-[rgba(255,255,255,0.3)] text-[14px]">•</span>
            <a 
              href="#" 
              className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors text-[12.1px] leading-[20px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
