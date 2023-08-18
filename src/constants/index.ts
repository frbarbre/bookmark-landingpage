import { Features } from "types";

export const navLinks = ["features", "pricing", "contact"];

export const features = [Features.simple, Features.speedy, Features.easy];

export const featuresTab = [
  {
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/illustration-features-tab-1.svg",
    id: Features.simple,
  },
  {
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/illustration-features-tab-2.svg",
    id: Features.speedy,
  },
  {
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/illustration-features-tab-3.svg",
    id: Features.easy,
  },
];
