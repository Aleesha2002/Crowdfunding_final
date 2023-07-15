import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    route: "/",
  },
  {
    id: "About",
    title: "About Us",
    route: "/about",
  },
  {
    id: "Contact",
    title: "Contact Us",
    route: "/contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Donations",
    content:
      "Transfering your money directly to the person in need in no time.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Campaigns",
    content:
      "Running campaigns to reach as many people to us join in our cause.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "300+",
  },
  {
    id: "stats-2",
    title: "Campaigns",
    value: "200+",
  },
  {
    id: "stats-3",
    title: "Donations",
    value: "200+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/home",
    done: "false",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
    done: "false",
  },
  // {
  //   name: "payment",
  //   imgUrl: payment,
  //   link: "/",
  //   disabled: true,
  // },
  // {
  //   name: "withdraw",
  //   imgUrl: withdraw,
  //   link: "/",
  //   disabled: true,
  // },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
    done: "false",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    done: "true",
  },
];
