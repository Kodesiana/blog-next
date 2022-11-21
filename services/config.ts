import { DefaultSeoProps } from "next-seo";

export type NavLink = {
  name: string;
  weight: number;
  path: string;
  newPage?: boolean;
  icon?: string;
};

export type Config = {
  // site info
  title: string;
  subTitle: string;
  description: string;

  author: string;

  showToc: boolean;
  paginate: number;
  copyrightStartYear: number;

  license: string;
  licenseLink: string;

  ssgPartially: boolean;
  ssgPrerender: number;

  // integration services
  integrations: {
    google_analytics: {
      tracking_id: string;
    };
    google_adsense: {
      tracking_id: string;
    };
    microsoft_clarity: {
      tracking_id: string;
    };
    mailchimp: {
      tracking_path: string;
    };
  };

  // site seo
  seo: DefaultSeoProps;

  // navigation links
  navLinks: NavLink[];

  // meta links
  metaLinks: NavLink[];

  // external links
  externalLinks: NavLink[];
};

const config: Config = {
  // site info
  title: "Kodesiana",
  subTitle: "#NgodingItuMudah by Fahmi Noor Fiqri",
  description:
    "A passionate software engineer and machine learning enthusiast.",

  author: "Fahmi Noor Fiqri",

  showToc: true,
  paginate: 5,
  copyrightStartYear: 2018,

  license: "CC BY 4.0",
  licenseLink: "https://creativecommons.org/licenses/by/4.0/",

  ssgPartially: false,
  ssgPrerender: 5,

  // integration services
  integrations: {
    google_analytics: {
      tracking_id: "G-WCSBJTCX6E",
    },
    google_adsense: {
      tracking_id: "ca-pub-123456789",
    },
    microsoft_clarity: {
      tracking_id: "123456789",
    },
    mailchimp: {
      tracking_path:
        "https://chimpstatic.com/mcjs-connected/js/users/c9b6346f906dad1b1a2a309c1/ed7023095897a6d39d7ca5dde.js",
    },
  },

  // site seo
  seo: {
    title: "Kodesiana.com",
    description: "#NgodinItuMudah",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://www.url.ie/",
      siteName: "SiteName",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
  },

  // nav links
  navLinks: [
    {
      name: "Tentang Penulis",
      path: "/about",
      weight: 1,
    },
    {
      name: "KFlearning",
      path: "/kflearning",
      weight: 2,
    },
    {
      name: "Open Source",
      path: "/open-source",
      weight: 3,
    },
    {
      name: "Buku, Riset, dan Seminar",
      path: "/research",
      weight: 4,
    },
    {
      name: "Konsultasi dan Pelatihan",
      path: "/training",
      weight: 5,
    },
    {
      name: "Bug Hunt Program🚩",
      path: "/bug-hunt-program",
      weight: 6,
    },
  ],

  // meta links
  metaLinks: [
    {
      name: "Donasi💸",
      path: "https://saweria.co/fahminlb33",
      weight: 1,
      newPage: true,
    },
    {
      name: "Pencarian",
      path: "/search",
      weight: 2,
    },
    {
      name: "Arsip",
      path: "/archives",
      weight: 3,
    },
    {
      name: "Kebijakan Privasi",
      path: "/privacy-policy",
      weight: 4,
    },
  ],

  // external links
  externalLinks: [
    {
      name: "GitHub",
      path: "https://github.com/fahminlb33",
      weight: 1,
      icon: "gg-git-fork",
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/fahmi-noor-fiqri",
      weight: 2,
      icon: "gg-work-alt",
    },
    {
      name: "YouTube",
      path: "https://www.youtube.com/c/FahmiNoorFiqri",
      weight: 3,
      icon: "gg-youtube",
    },
    {
      name: "Instagram",
      path: "https://instagram.com/fahminoorfiqri",
      weight: 4,
      icon: "gg-instagram",
    },
    {
      name: "Discord",
      path: "https://discordapp.com/users/335793244741042176",
      weight: 5,
      icon: "gg-mail",
    },
    {
      name: "Twitter",
      path: "https://twitter.com/fahminoorfiqri",
      weight: 6,
      icon: "gg-twitter",
    },
  ],
};

export default config;
