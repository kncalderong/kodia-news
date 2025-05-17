import {
  BriefcaseIcon,
  CpuIcon,
  DramaIcon,
  EarthIcon,
  HeartPulseIcon,
  HomeIcon,
  LeafIcon,
  LucideIcon,
} from "lucide-react";

export type NavLinkType = {
  id: number;
  text: string;
  path: string;
  icon: LucideIcon;
};

const links: NavLinkType[] = [
  { id: 1, text: "home", path: "/", icon: HomeIcon },
  { id: 2, text: "politics", path: "/politics", icon: EarthIcon },
  { id: 3, text: "technology", path: "/technology", icon: CpuIcon },
  { id: 4, text: "health", path: "/health", icon: HeartPulseIcon },
  { id: 5, text: "environment", path: "/environment", icon: LeafIcon },
  { id: 6, text: "business", path: "/business", icon: BriefcaseIcon },
  { id: 7, text: "culture", path: "/culture", icon: DramaIcon },
];

export default links;
