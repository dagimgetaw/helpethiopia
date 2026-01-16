import {
  Heart,
  ShieldCheck,
  GraduationCap,
  House,
  Users,
  Student,
  UserCirclePlus,
} from "phosphor-react";
import { HandCoins } from "@phosphor-icons/react";
import university from "../../../assets/AAU logo.png";
import hospital from "../../../assets/TkurAnbesa logo.jpg";
import a from "../../../assets/story1.jpg";
import b from "../../../assets/story2.jpg";
import c from "../../../assets/story3.jpg";

export const map_url =
  "https://www.google.com/maps/search/?api=1&query=Tikur+Ambessa+Teaching+Hospital,Addis+Ababa";

export const services = [
  {
    icon: <Heart className="text-darkblue w-6 h-6" weight="fill" />,
    title: "Ye'Eteye Charity",
    description:
      "Our charitable initiative has helped over 1000 patients who struggled to cover their medical bills, primarily from rural areas. We currently operate at Tikur Anbessa Specialised Hospital.",
  },
  {
    icon: <ShieldCheck className="text-darkblue w-6 h-6" weight="fill" />,
    title: "Quality Improvement",
    description:
      "HELP Ethiopia demonstrates commitment to continuous improvement by implementing impactful programs focusing on streamlining healthcare processes and optimizing patient experience.",
  },
  {
    icon: <GraduationCap className="text-darkblue w-6 h-6" weight="fill" />,
    title: "Education & Leadership",
    description:
      "We invest in the future by empowering the next generation of Ethiopians to become effective healthcare leaders through comprehensive training programs and mentorship.",
  },
];

export const stats = [
  {
    icon: <House size={28} weight="fill" />,
    number: "15+",
    label: "Active Programs",
  },
  {
    icon: <Users size={28} weight="fill" />,
    number: "250+",
    label: "Dedicated Volunteers",
  },
  {
    icon: <HandCoins size={28} weight="fill" />,
    number: "1250+",
    label: "Patients Helped",
  },
  {
    icon: <Student size={28} weight="fill" />,
    number: "500+",
    label: "Healthcare Workers Trained",
  },
  {
    icon: <UserCirclePlus size={28} weight="fill" />,
    number: "5000+",
    label: "Indirect Beneficiaries",
  },
];

export const partners = [
  {
    src: university,
    alt: "Addis Ababa University Logo",
    name: "Addis Ababa University",
    description: "Academic partner providing research and training support",
  },
  {
    src: hospital,
    alt: "Tikur Anbesa Hospital Logo",
    name: "Tikur Anbesa Hospital",
    description: "Clinical partner for patient care and medical training",
  },
];

export const success_storie = [
  {
    id: 1,
    name: "A Sister’s Love and a Family’s Hope.",
    age: 9,
    condition: "Critical illness requiring ICU care",
    location: "Buraiyu, Oromia",
    image: a,
    story:
      "Edel Solomon is a brave 9-year-old girl from Buraiyu who faced one of the toughest battles of her young life. She spent over two months in the ICU and another month and a half in the B7 ward—almost four months in the hospital fighting for her life. <br /><br /> Throughout this difficult time, her 11-year-old sister stayed by her side, sacrificing her own school attendance just to be close and offer comfort. Their father, who works tirelessly, could only visit once a week.",
    link: "/blog/68c0383c66cbb344eee66e01",
  },
  {
    id: 2,
    name: "The Young Shepherd’s Courageous Journey.",
    age: 7,
    condition: "Severe bacterial infection",
    location: "Wolega, Oromia",
    image: b,
    story:
      "Ketele, a 7-year-old boy from Wollega, spends his days tending to animals as a young shepherd. One day, while caring for the herd, he fell from a horse and injured his chest. The pain was sharp and deep, but out of fear of being punished, he kept the accident a secret from his parents. <br /><br /> Days later, the pain grew worse, and a persistent cough set in. His family took him to several local and referral hospitals, but answers were hard to find. Eventually, he was referred to Tikur Anbessa Specialized Hospital, where doctors discovered a severe bacterial infection. The infection had caused fluid to build up around his heart and lungs, making it difficult for him to breathe.",
    link: "/blog/68c0383c66cbb344eee66e01",
  },
  {
    id: 3,
    name: "A Second Chance for Usman.",
    age: 11,
    condition: "Chronic ITP",
    location: "Oromia",
    image: c,
    story:
      "Usman Debisa, an 11-year-old boy from Oromia, has been battling a rare autoimmune condition known as Chronic ITP. Diagnosed at Black Lion Hospital, his life took a difficult turn. For the past two years, his nose and gums have bled intermittently and uncontrollably, and his body has been covered in bruises.<br/><br/> The illness forced him to leave school and stay home with his younger siblings. Once a bright and promising student, Usman is still in grade 1 His father, a farmer in rural Oromia with six children to care for, had exhausted all his savings trying to find a cure. When we found Usman in the Pediatric Casualty ward, he was unconscious and in shock. His condition was critical.",
    link: "/blog/68c0383c66cbb344eee66e01",
  },
];
