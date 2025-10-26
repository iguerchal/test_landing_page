export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rarity: 'Secret' | 'Ultimate' | 'Prismatic' | 'Godly' | 'Exclusive' | 'Mythic' | 'Legendary' | 'Ultra rare' | 'Rare' | 'Uncommon' | 'Common';
  image: string;
  category: string;
}

export interface RarityOption {
  name: string;
  color: string;
  gradient: string;
  count: number;
}

export const rarityOptions: RarityOption[] = [
  { name: 'Secret', color: '#ffbb00', gradient: 'from-[#ffbb00] to-[#ffd971]', count: 0 },
  { name: 'Ultimate', color: '#ff00c8', gradient: 'from-[#ff00c8] to-[#ff5cfc]', count: 0 },
  { name: 'Prismatic', color: '#0900ff', gradient: 'from-[#0900ff] to-[#8376ff]', count: 0 },
  { name: 'Godly', color: '#ff4400', gradient: 'from-[#ff4400] to-[#ff7d5c]', count: 0 },
  { name: 'Exclusive', color: '#56adff', gradient: 'from-[#56adff] to-[#5cd4ff]', count: 0 },
  { name: 'Mythic', color: '#ff565a', gradient: 'from-[#ff565a] to-[#993336]', count: 0 },
  { name: 'Legendary', color: '#329cff', gradient: 'from-[#329cff] to-[#6ed4ff]', count: 0 },
  { name: 'Ultra rare', color: '#329cff', gradient: 'from-[#329cff] to-[#6ed4ff]', count: 0 },
  { name: 'Rare', color: '#ff4232', gradient: 'from-[#ff4232] to-[#ff7a6e]', count: 0 },
  { name: 'Uncommon', color: '#329cff', gradient: 'from-[#329cff] to-[#6ed4ff]', count: 0 },
  { name: 'Common', color: '#329cff', gradient: 'from-[#329cff] to-[#6ed4ff]', count: 0 },
];

export const hotItems: Product[] = [
  { id: '1', name: 'Kitsune', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Hot Items' },
  { id: '2', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Mythic', image: '', category: 'Hot Items' },
  { id: '3', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Hot Items' },
  { id: '4', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Mythic', image: '', category: 'Hot Items' },
  { id: '5', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Hot Items' },
  { id: '6', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Hot Items' },
];

export const bestSellers: Product[] = [
  { id: '7', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Best Sellers' },
  { id: '8', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Mythic', image: '', category: 'Best Sellers' },
  { id: '9', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Mythic', image: '', category: 'Best Sellers' },
  { id: '10', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Mythic', image: '', category: 'Best Sellers' },
  { id: '11', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Best Sellers' },
  { id: '12', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Best Sellers' },
];

export const pets: Product[] = [
  { id: '13', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Mythic', image: '', category: 'Pets' },
  { id: '14', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Mythic', image: '', category: 'Pets' },
  { id: '15', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Mythic', image: '', category: 'Pets' },
  { id: '16', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Pets' },
  { id: '17', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Pets' },
  { id: '18', name: 'Racoon Pets', price: 20.29, originalPrice: 69.99, discount: 31, rarity: 'Rare', image: '', category: 'Pets' },
];

export const categories = [
  { id: 'all', name: 'All', active: false },
  { id: 'hot', name: 'Hot Items', active: true },
  { id: 'best', name: 'Best Sellers', active: false },
  { id: 'bundles', name: 'Bundles', active: false },
  { id: 'knives', name: 'Knives', active: false },
  { id: 'guns', name: 'Guns', active: false },
  { id: 'summer', name: 'Summer Specials', active: false },
];


