import {
  SiVisualstudiocode,
  SiGooglechrome,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiPrettier,
  SiPnpm,
  SiFigma,
  SiInsomnia,
  SiBitwarden,
  SiGrammarly,
  SiFirefox,
  SiBrave,
  SiNpm,
  SiNetlify,
  SiEslint,
  SiSnyk,
  SiCanva,
  SiGit,
  SiGithub,
  SiWindows,
  SiProtonmail,
  SiProtonvpn,
  SiNotion,
  SiDiscord,
  SiHyper,
  SiSignal,
} from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import SVG from "./SVG/index";
import { Utility } from "@lib/types/index";

const system: Utility = {
  title: "System",
  data: [
    {
      name: "VSCode",
      description: "Primary Code editor",
      Icon: SiVisualstudiocode,
      link: "https://code.visualstudio.com/download",
    },
    {
      name: "Hyper",
      description: "Terminal",
      Icon: SiHyper,
      link: "https://hyper.is/",
    },
    {
      name: "Windows",
      description: "Operating System",
      Icon: SiWindows,
      link: "https://www.microsoft.com/software-download/",
    },
    {
      name: "Chrome",
      description: "Primary Browser",
      Icon: SiGooglechrome,
      link: "https://www.google.com/chrome",
    },
    {
      name: "Firefox",
      description: "Secondary Browser",
      Icon: SiFirefox,
      link: "https://www.mozilla.org/firefox/",
    },
    {
      name: "Brave",
      description: "Secondary Browser",
      Icon: SiBrave,
      link: "https://brave.com/",
    },
  ],
};
const tools: Utility = {
  title: "Coding Tools",
  data: [
    {
      name: "React.js",
      description: "Primary Front-end library",
      Icon: SiReact,
      link: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      description: "Primary Web Development Framework",
      Icon: SiNextdotjs,
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      description: "For styling the fron-end",
      Icon: SiTailwindcss,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Vercel",
      description: "Hosting for Projects",
      Icon: SiVercel,
      link: "https://vercel.com/",
    },

    {
      name: "Netlify",
      description: "Hosting for Projects",
      Icon: SiNetlify,
      link: "https://www.netlify.com/",
    },
    {
      name: "Prettier",
      description: "For Code formatting",
      Icon: SiPrettier,
      link: "https://prettier.io/",
    },
    {
      name: "Eslint",
      description: "For Code linting",
      Icon: SiEslint,
      link: "https://eslint.org/",
    },
    {
      name: "Git",
      description: "Version Control",
      Icon: SiGit,
      link: "https://git-scm.com/downloads",
    },
    {
      name: "Github",
      description: "For Storing and Managing Projects",
      Icon: SiGithub,
      link: "https://github.com/",
    },
    {
      name: "pnpm",
      description: "Primary Package Manager",
      Icon: SiPnpm,
      link: "https://pnpm.io/",
    },
    {
      name: "npm",
      description: "Alternative Package Manager",
      Icon: SiNpm,
      link: "https://classic.yarnpkg.com/lang/en/docs/install/",
    },
    {
      name: "Figma",
      description: "Primary Design tool",
      Icon: SiFigma,
      link: "https://www.figma.com/downloads/",
    },
    {
      name: "Canva",
      description: "Secondary Design tool",
      Icon: SiCanva,
      link: "https://www.canva.com/",
    },
    {
      name: "Insomnia",
      description: "For testing APIs",
      Icon: SiInsomnia,
      link: "https://insomnia.rest/download",
    },
    {
      name: "Snyk",
      description: "Find and fix vulnerabilities",
      Icon: SiSnyk,
      link: "https://snyk.io/",
    },
  ],
};

const software: Utility = {
  title: "Software/Applications",
  data: [
    {
      name: "Bitwarden",
      description: "Password Manager",
      Icon: SiBitwarden,
      link: "https://bitwarden.com/",
    },
    {
      name: "Proton Mail",
      description: "Email Service",
      Icon: SiProtonmail,
      link: "https://proton.me/mail",
    },
    {
      name: "Proton VPN",
      description: "VPN Service",
      Icon: SiProtonvpn,
      link: "https://protonvpn.com/",
    },
    {
      name: "SimpleLogin",
      description: "Email aliases",
      Icon: SVG.SimpleLogin,
      link: "https://simplelogin.io/",
    },
    {
      name: "Yubico",
      description: "Hardware Security Key",
      Icon: SVG.Yubico,
      link: "https://www.yubico.com/",
    },
    {
      name: "Discord",
      description: "For communication",
      Icon: SiDiscord,
      link: "https://discord.com/",
    },
    {
      name: "Session",
      description: "For communication",
      Icon: SiSignal,
      link: "https://getsession.org/",
    },
    {
      name: "Grammarly",
      description: "Typing assistant that reviews spelling, grammar, etc.",
      Icon: SiGrammarly,
      link: "https://www.grammarly.com/",
    },
    {
      name: "Notion",
      description: "Note taking and organizing",
      Icon: SiNotion,
      link: "https://www.grammarly.com/",
    },
    {
      name: "Everything Search",
      description: "For quick searching in Windows",
      Icon: FaSearch,
      link: "https://www.voidtools.com/downloads/",
    },
    {
      name: "Flameshot",
      description: "Screen capture",
      Icon: SVG.Flameshot,
      link: "https://getsharex.com/downloads/",
    },
  ],
};

const utilities = [system, tools, software];

export default utilities;
