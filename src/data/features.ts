export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Premium Payouts",
    description: "Earn premium rates on all your content with competitive payouts that reward your creativity.",
    icon: "DollarSign",
    gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  },
  {
    id: 2,
    title: "Commission Rewards",
    description: "Get rewarded with commission bonuses on referrals and additional revenue streams.",
    icon: "Award",
    gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  },
  {
    id: 3,
    title: "Creator Community",
    description: "Join a thriving community of creators and collaborate with other Roblox content makers.",
    icon: "Users",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  },
  {
    id: 4,
    title: "Network Access",
    description: "Connect with top brands and unlock exclusive partnership opportunities for growth.",
    icon: "Network",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  },
  {
    id: 5,
    title: "Instant Setup",
    description: "Get started in minutes with our streamlined onboarding process and intuitive dashboard.",
    icon: "Zap",
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  },
  {
    id: 6,
    title: "Secure Payments",
    description: "Receive your earnings safely and on-time with our reliable and secure payment system.",
    icon: "Shield",
    gradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  }
];
