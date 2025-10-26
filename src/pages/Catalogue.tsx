import { FilterSidebar } from "@/components/catalogue/FilterSidebar";
import { TopBar } from "@/components/catalogue/TopBar";
import { BannerSection } from "@/components/catalogue/BannerSection";
import { CategoryTabs } from "@/components/catalogue/CategoryTabs";
import { HotItemsCarousel } from "@/components/catalogue/HotItemsCarousel";
import { ProductSection } from "@/components/catalogue/ProductSection";
import { hotItems, bestSellers, pets, categories } from "@/data/catalogue";

// Importe le CSS spécifique du catalogue (utilitaires dédiés)
import "@/styles/catalogue.css";

export default function Catalogue() {
  return (
    <div className="min-h-screen bg-[#000B05] relative overflow-x-hidden">
      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 opacity-80 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <radialGradient id="bg-gradient">
              <stop offset="0%" stopColor="#0B0B0C" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#000B05" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-gradient)" />
        </svg>
      </div>

      {/* Filter Sidebar */}
      <FilterSidebar />

      {/* Top Bar */}
      <TopBar />

      {/* Main Content */}
      <main className="ml-[298px] pt-[77px] relative z-10">
        <div className="max-w-[1539px] mx-auto px-8 py-8">
          {/* Banner Section */}
          <BannerSection />

          {/* Category Search Tabs */}
          <CategoryTabs categories={categories} />

          {/* Hot Items Carousel */}
          <HotItemsCarousel items={hotItems} />

          {/* Best Sellers Section */}
          <ProductSection
            title="Best Sellers"
            icon={
              <div className="w-[41px] h-[41px] bg-gradient-to-b from-[#ffbb00] to-[#ffd971] rounded-[8px]" />
            }
            products={bestSellers}
          />

          {/* Pets Section */}
          <ProductSection
            title="Pets"
            icon={
              <div className="w-[49px] h-[49px] bg-gradient-to-b from-[#ff565a] to-[#993336] rounded-[8px]" />
            }
            products={pets}
          />

          {/* Sheckles Section */}
          <ProductSection
            title="Sheckles"
            icon={
              <div className="w-[35px] h-[43.867px] bg-gradient-to-b from-[#56adff] to-[#5cd4ff] rounded-[8px]" />
            }
            products={pets}
          />

          {/* Fruits Section */}
          <ProductSection
            title="Fruits"
            icon={
              <div className="w-[34.286px] h-[40.857px] bg-gradient-to-b from-[#ff4400] to-[#ff7d5c] rounded-[8px]" />
            }
            products={bestSellers}
          />

          {/* Mutated Pets Section */}
          <ProductSection
            title="Mutated Pets"
            icon={
              <div className="w-[34.286px] h-[40.857px] bg-gradient-to-b from-[#0900ff] to-[#8376ff] rounded-[8px]" />
            }
            products={pets}
          />

          {/* Mega Pets Section */}
          <ProductSection
            title="Mega Pets"
            icon={
              <div className="w-[34.286px] h-[40.857px] bg-gradient-to-b from-[#ff00c8] to-[#ff5cfc] rounded-[8px]" />
            }
            products={bestSellers}
          />

          {/* Bundles Section */}
          <ProductSection
            title="Bundles"
            icon={
              <div className="w-[34.286px] h-[40.857px] bg-gradient-to-b from-[#ffff00] to-[#f1ff87] rounded-[8px]" />
            }
            products={pets}
          />
        </div>

        {/* FAQ Section */}
        <section className="border-t border-[rgba(211,211,211,0.33)] py-16">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-white text-[40px] font-['Poppins'] mb-4">
                Have <span className="text-[#13e97d]">Questions?</span> We Got <span className="text-[#13e97d]">You!</span>
              </h2>
              <p className="text-[#999999] text-[14px] font-['Poppins']">
                Got questions? We've got answers!
              </p>
            </div>

            {/* FAQ Grid */}
            <div className="grid grid-cols-2 gap-6 mb-16">
              {[
                'Is RoCart legit for buying Grow a Garden items?',
                'How do I claim my Grow a Garden items after purchasing?',
                'What is your refund policy?',
                'Can I trade my Grow a Garden items for items on RoCart?',
                'Can I get free Grow a Garden items?',
                "What if I don't receive my Grow a Garden items after purchase?",
              ].map((question, index) => (
                <div key={index} className="bg-[#0e2514] border border-[rgba(211,211,211,0.33)] rounded-[20px] p-6 h-[85px] flex items-center">
                  <p className="text-white text-[20px] font-['Poppins']">{question}</p>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="text-center">
              <h3 className="text-white text-[40px] font-['Poppins'] mb-4">
                We Are Not Affiliated with Roblox Corporation
                <br />
                <span className="text-[#13e97d]">Big Games</span> or <span className="text-[#13e97d]">Uplift Games</span>
              </h3>
              <p className="text-[#999999] text-[14px] font-['Poppins'] max-w-[1036px] mx-auto leading-relaxed">
                RoCart.com is not affiliated, associated, or partnered with Roblox Corporation, Big Games, Uplift Games, or any other game developers in any way.
                RoCart.com is an independent platform for digital skins & item sales and is not authorized, endorsed, or sponsored by Roblox Corporation,
                Big Games, Uplift Games or any of their affiliates. All trademarks and copyrights belong to their respective owners.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#030c08] py-16">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-4 gap-12 mb-12">
              {/* Disclaimer Column */}
              <div className="col-span-2">
                <h4 className="text-white text-[14px] font-['Poppins'] mb-4">Disclaimer</h4>
                <p className="text-[#7b7b7b] text-[14px] font-['Poppins'] leading-[22.75px] mb-6">
                  RoCart is not affiliated, endorsed by, or in any way associated
                  <br />
                  with ROBLOX Corporation, Roblox.com, or any of its subsidiaries
                  <br />
                  or affiliates.
                </p>
                <p className="text-[#7b7b7b] text-[12px] font-['Poppins']">© 2025 Rocart All rights reserved.</p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-white text-[14px] font-['Poppins'] mb-4">Social Media</h4>
                <ul className="space-y-2">
                  {['Twitter', 'YouTube', 'TikTok', 'Discord'].map((platform) => (
                    <li key={platform}>
                      <a href="#" className="text-[#999999] text-[14px] font-['Poppins'] hover:text-[#13e97d] transition-colors">
                        {platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Us */}
              <div>
                <h4 className="text-white text-[14px] font-['Poppins'] mb-4">About Us</h4>
                <ul className="space-y-2">
                  {['How We Work', 'Why Us', 'FAQ'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#999999] text-[14px] font-['Poppins'] hover:text-[#13e97d] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center justify-end gap-3 pt-8 border-t border-[#1e3126]">
              {['Visa', 'Amex', 'Mastercard', 'Apple Pay', 'PayPal', 'Discover'].map((method) => (
                <div key={method} className="w-[48px] h-[32px] bg-white/5 rounded-[6px] border border-white/10 flex items-center justify-center">
                  <span className="text-[8px] text-white/30">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Cart Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#006532] w-[64px] h-[65px] rounded-l-[8px] border border-[rgba(19,233,125,0.25)] flex items-center justify-center hover:bg-[#007a3d] transition-colors group">
          <svg className="w-[42px] h-[39px] text-white" fill="currentColor" viewBox="0 0 42 39">
            <path d="M7.82068 20.4001C6.38036 20.4001 5.22681 21.5411 5.22681 22.9499C5.22681 24.3589 6.38036 25.5 7.82068 25.5C9.26098 25.5 10.4276 24.3589 10.4276 22.9499C10.4276 21.5411 9.26098 20.4001 7.82068 20.4001ZM0 0V2.54999H2.60689L7.29278 12.2209L5.53313 15.3446C5.33109 15.7144 5.21378 16.1288 5.21378 16.5751C5.21378 17.9839 6.38036 19.125 7.82068 19.125H23.462V16.5751H8.37463C8.19216 16.5751 8.04878 16.4348 8.04878 16.2562C8.04878 16.1988 8.06181 16.1479 8.08788 16.1032L9.25446 14.025H18.9651C19.9427 14.025 20.7964 13.4959 21.2461 12.7117L25.906 4.437C26.0103 4.25849 26.069 4.04812 26.069 3.825C26.069 3.11737 25.4824 2.54999 24.7654 2.54999H5.49403L4.25575 0H0ZM20.8551 20.4001C19.4148 20.4001 18.2613 21.5411 18.2613 22.9499C18.2613 24.3589 19.4148 25.5 20.8551 25.5C22.2955 25.5 23.462 24.3589 23.462 22.9499C23.462 21.5411 22.2955 20.4001 20.8551 20.4001Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}


