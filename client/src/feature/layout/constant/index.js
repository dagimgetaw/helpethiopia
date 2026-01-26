import {
  FacebookLogo,
  InstagramLogo,
  TelegramLogo,
  Heartbeat,
  TestTube,
  Airplay,
  Pill,
} from "phosphor-react";
import { XLogo } from "@phosphor-icons/react";

export const nav_link = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/our-team", label: "Our Team" },
  { path: "/blogs", label: "Blogs" },
  { path: "/what-we-do", label: "What We Do" },
];

export const social_media = [
  {
    icon: FacebookLogo,
    url: "https://www.facebook.com/profile.php?id=100092545625116",
    name: "Facebook",
  },
  {
    icon: XLogo,
    url: "https://twitter.com/YeEteyeCharity?s=35",
    name: "Twitter",
  },
  {
    icon: InstagramLogo,
    url: "https://www.instagram.com/p/Cr1NJ15o9pS/?igshid=YmMyMTA2M2Y=",
    name: "Instagram",
  },
  {
    icon: TelegramLogo,
    url: "https://t.me/help_for_eth",
    name: "Telegram",
  },
];

export const donation_type = [
  {
    title: "Life-Saving Medical Treatments",
    desc: "Support urgent care for patients who cannot afford treatment.",
    icon: Heartbeat,
  },
  {
    title: "Essential Laboratory Tests",
    desc: "Fund vital lab analyses that help diagnose conditions early.",
    icon: TestTube,
  },
  {
    title: "Diagnostic Imaging Services",
    desc: "Provide access to X-rays, ultrasounds, and other key scans.",
    icon: Airplay,
  },
  {
    title: "Critical Surgical Supplies",
    desc: "Equip hospitals with the tools needed for safe surgeries.",
    icon: Pill,
  },
];
