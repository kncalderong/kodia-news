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
  { id: 3, text: "technology", path: "/politics", icon: CpuIcon },
  { id: 4, text: "health", path: "/politics", icon: HeartPulseIcon },
  { id: 5, text: "environment", path: "/politics", icon: LeafIcon },
  { id: 6, text: "business", path: "/politics", icon: BriefcaseIcon },
  { id: 7, text: "culture", path: "/politics", icon: DramaIcon },
];

export default links;
