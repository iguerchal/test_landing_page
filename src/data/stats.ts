export interface Stat {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: string;
  gradient: string;
}

export const stats: Stat[] = [
  {
    id: 1,
    title: "Per 1,000 Views",
    value: "$3",
    description: "Earn competitive rates",
    icon: "Eye",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  },
  {
    id: 2,
    title: "Commission Rate",
    value: "5%",
    description: "On all referrals",
    icon: "Percent",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  },
  {
    id: 3,
    title: "Total Paid Out",
    value: "$250K+",
    description: "To our creators",
    icon: "TrendingUp",
    gradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  },
  {
    id: 4,
    title: "Active Creators",
    value: "100+",
    description: "And growing daily",
    icon: "Users",
    gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)"
  }
];
