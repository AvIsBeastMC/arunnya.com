export interface Project {
  category: string;
  date: string;
  title: string;
  builtWith: string[];
  description: string;
  features?: string[];
  i: string;
  link?: string;
  wFull: boolean;
  readMore: boolean;
  contesting?: "contesting" | "contested" | "won";
}

export default [
  {
    wFull: true,
    i: "bi bi-globe",
    category: "Database and Resources",
    date: "10 December 2022",
    title: "Tierisches",
    builtWith: [
      "NextJS (ReactJS)",
      "Firebase Authentication",
      "Firebase Firestore",
      "React Native",
      "Expo",
      "NativeBase",
      "TailwindCSS",
      "tRPC"
    ],
    description:
      "This is a website dedicated to information database about Animals, its Properties and its Breeds. This database of information can be contributed to, by its users with verification done to all its sources, similar to how Wikipedia works.",
    features: [
      "Find infomation about Animals",
      "Be a Verified Contributor and/or Editor",
      "Compare Animals",
      "Share Pages and Informations with QR Code Generation & Sharing",
      "Dark Mode based UI with Clean Animations and Layout",
      "Authentication with Sign-in",
      "Verification of all information, reliable information only"
    ],
    readMore: false,
    contesting: "contesting",
  },
  {
    wFull: false,
    i: "bi bi-play",
    category: "Video Sharing",
    date: "22 February 2022",
    title: "Watchbang",
    builtWith: [
      "Nuxt.js",
      "MongoDB",
      "Firebase Storage",
      "Moment",
      "Express",
      "TailwindCSS",
    ],
    description:
      "This is a video-sharing website just like YouTube, though the design has really not been focused at, like at all, the goal was just to build the basic up-and-running site which serves it's basic purpose stably.",
    features: [
      "Find latest videos",
      "Watch Videos",
      "Save and Share Videos",
      "Views counted for each video",
      "Upload your own videos by creating a channel in the dashboard",
    ],
    readMore: false,
    link: "https://www.watchbang.tk/",
  },
  {
    wFull: false,
    i: "bi bi-newspaper",
    category: "News and Posts",
    date: "4th June 2022",
    title: "EasyPolitics",
    builtWith: ["Nuxt.js", "Firebase Firestore", "TailwindCSS", "Moment"],
    description:
      "This site is just like another news website like The Times of India website or The Hindu, you can be an editor, publish posts and use HTML/Markdown tags to represent and highlight parts and portions of paragraphs.",
    features: [
      "Write Posts",
      "Comment on Posts",
      "Save Posts in your See Later",
      "Views counted for each post",
    ],
    link: "https://www.easypolitics.ml",
    readMore: false,
  },
  {
    wFull: false,
    i: "bi bi-stopwatch",
    category: "Time and Clock",
    date: "12 Jul 2022",
    title: "Reminders and Notifications",
    builtWith: [
      "React",
      "MongoDB",
      "Moment",
      "Express",
      "and a lot of other minor dependencies...",
    ],
    description: "This is a website responsible for alarms and accurate times. Reminders are alarms triggered at a specified time before an event starts. Notifications allow users to find out about the alarm.",
    features: [
      "Schedule alarms",
      "Notifications",
      "Alert Sounds",
      "Delete Alarms",
    ],
    readMore: false,
  },
  {
    wFull: false,
    i: "bi bi-cart",
    category: "Grocery and Ecommerce",
    date: "12 Jul 2022",
    title: "Arunnya's Delight (Mobile App)",
    builtWith: [
      "React Native",
      "Expo",
      "MongoDB",
      "Moment",
      "Express",
      "and a lot of other minor dependencies...",
    ],
    description:
      "This is a Mobile Application which is equivalent to apps like Grofers or CountryDelight, payment systems, cart, items, account settings and handles, order history, and more etc..",
    features: [
      "Order according to schedule calendar",
      "Cart System",
      "Purchase System",
      "Order History",
      "Items",
      "History for all the purchases ever made during the lifetime of your account",
    ],
    readMore: false,
  },
  {
    wFull: false,
    i: "bi bi-chat-square-text",
    link: "https://www.fireforums.ml/",
    category: "Messaging and Forum",
    date: "N.A.",
    title: "Fireforums (very old)",
    builtWith: [
      "Firebase Storage",
      "Firebase Authentication",
      "Quasar",
      "Moment",
      "and a lot of other minor dependencies...",
    ],
    readMore: false,

    description:
      "This website is similar to that of WhatsApp and Twitter combined, you could post, gather upvotes, and you can also add people to your Direct Messages by entering their exact registered email address and you can talk to them in realtime.",
    features: [
      "Talk by messaging people",
      "View Threads",
      "Post Threads",
      "Views counted for each thread",
      "Create your own thread(s) and gather upvotes and views",
      "Have a profile set up as well",
    ],
  },
  {
    wFull: false,
    i: "bi bi-flag",
    category: "Tournament",
    date: "1 February 2022",
    title: "GoIndia",
    builtWith: [
      "MongoDB",
      "Nuxt.js",
      "Discord.js",
      "TailwindCSS",
      "and a lot of other minor dependencies...",
    ],
    readMore: false,
    description:
      "A website and a discord server with a discord bot was created for this Valorant tournament, registrations were possible through the website and the bot kept the discord server #teams channel up-to-date and tracked all the registered teams and also sent schedules and notifications about matches.",
  },
] as Project[]