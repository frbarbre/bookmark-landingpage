import { Features } from 'types';

export const navLinks = ['features', 'pricing', 'contact'];

export const features = [Features.simple, Features.speedy, Features.easy];

export const featuresTab = [
  {
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    image: '/illustration-features-tab-1.svg',
    id: Features.simple,
  },
  {
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    image: '/illustration-features-tab-2.svg',
    id: Features.speedy,
  },
  {
    title: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    image: '/illustration-features-tab-3.svg',
    id: Features.easy,
  },
];

export const extensionCards = [
  {
    title: 'Add to Chrome',
    text: 'Minimum version 62',
    image: '/logo-chrome.svg',
  },
  {
    title: 'Add to Firefox',
    text: 'Minimum version 55',
    image: '/logo-firefox.svg',
  },
  {
    title: 'Add to Opera',
    text: 'Minimum version 46',
    image: '/logo-opera.svg',
  },
];

export const questions = [
  {
    question: 'What is Bookmark?',
    answer:
      'Bookmark is a powerful browser plugin designed to help you efficiently manage your web bookmarks. It enables you to organize, categorize, and access your saved websites with ease, making your online experience more convenient and streamlined.',
  },
  {
    question: 'How can I request a new browser?',
    answer:
      "Bookmark is a plugin that enhances your current browser's bookmark management capabilities. It is not a standalone browser. If you're interested in using Bookmark, simply install it as an extension on your existing browser. No need to request a new browser.",
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Currently, Bookmark is optimized for desktop browsers and does not offer a dedicated mobile app. However, you can access and manage your bookmarks through the browser extension on your mobile device, allowing you to sync and organize your bookmarks seamlessly across different platforms.',
  },
  {
    question: 'What about other Chromium browsers?',
    answer:
      'Bookmark is compatible with most Chromium-based browsers, ensuring a consistent bookmark management experience across different browser options. Whether you use Google Chrome, Microsoft Edge, Brave, or other Chromium browsers, Bookmark is designed to integrate smoothly and enhance your bookmarking capabilities.',
  },
];
