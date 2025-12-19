import {
  FacebookLogo,
  XLogo,
  InstagramLogo,
  TelegramLogo,
  Heartbeat,
  TestTube,
  Airplay,
  Pill,
} from "@phosphor-icons/react";
import feron from "../assets/feron.webp";
import betelhem from "../assets/betelhem.webp";
import samuel_m from "../assets/samuel_m.webp";
import gihon from "../assets/gihon.webp";
import kidist from "../assets/kidist.webp";
import userIcon from "../assets/user.webp";

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

export const team_data = [
  {
    image: feron,
    name: "Feron Getachew, MD",
    position: "President",
    Biography: "Biography",
    linkedin: "link2",
    gmail: "link3",
  },
  {
    image: betelhem,
    name: "Betelhem Berhanu, MD",
    position: "Vice President",
    Biography: "Biography",
    linkedin: "link2",
    gmail: "link3",
  },
  {
    image: samuel_m,
    name: "Samuel Masresha, MD",
    position: "Secretary",
    Biography: "Biography",
    facebook: "link1",
    linkedin: "link2",
    gmail: "link3",
  },
  {
    image: gihon,
    name: "Ghion Ashenafi",
    position: "Education and Leadership Program Manager",
    Biography: "Biography",
    linkedin: "link2",
    gmail: "link3",
  },
  {
    image: kidist,
    name: "Kidist Solomon",
    position: "Operation Manager",
    Biography: "Biography",
    linkedin: "link2",
    gmail: "link3",
  },
  {
    image: userIcon,
    name: "Ermias Aklilu",
    position: "Project Manager",
    Biography: "Biography",
    linkedin: "link2",
    gmail: "link3",
  },
  {
    image: userIcon,
    name: "Dagim Getaw",
    position: "Full-Stack Developer",
    Biography: "Biography",
    linkedin: "link2",
    gmail: "link3",
  },
  {
    image: userIcon,
    name: "Ahlam Zeynu",
    position: "Full-Stack Developer",
    Biography: "Biography",
    linkedin: "link2",
    gmail: "link3",
  },
  {
    image: userIcon,
    name: "Elham",
    position: "Full-Stack Developer",
    Biography: "Biography",
    linkedin: "link2",
    gmail: "link3",
  },
];
