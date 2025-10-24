export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up in seconds and get instant access to your creator dashboard with all the tools you need.",
    icon: "UserPlus",
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "Connect Platforms",
    description: "Link your Roblox account and social media platforms to start tracking your content performance.",
    icon: "Link",
    color: "#8B5CF6"
  },
  {
    id: 3,
    title: "Start Earning",
    description: "Upload content, share your affiliate links, and watch your earnings grow with real-time analytics.",
    icon: "TrendingUp",
    color: "#00FF66"
  }
];
