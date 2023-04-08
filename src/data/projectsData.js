import NetflixClone from "../assets/images/netflix-clone.png";
import AmazonClone from "../assets/images/amazon-clone.png";
import CodePapers from "../assets/images/code-papers-2.png";
import TuskininkLibrary from "../assets/images/tuskinink-ui-library.png";
import NatureTrips from "../assets/images/natours-ui.png";

import ResortTrips from "../assets/images/resort-trips.png";
import TranspileBundle from "../assets/images/transpile-and-bundle.png";
import TradersBlock from "../assets/images/traders-block.png";
import PokerBuz from "../assets/images/poker-buz.png";
import POS from "../assets/images/e-commerce.png";
import BlogApp from "../assets/images/blog-app.png";
import SpaceX from "../assets/images/space-x.png";
import HouseBuy from "../assets/images/house-buy.png";
import PortoForge from "../assets/images/porto-forge.png";

import NatureToursNode from "../assets/images/nature-tours-node.png";

import GroupChat from "../assets/images/group-chat.png";
import ZomatoClone from "../assets/images/zomato-clone.png";

import MealApp from "../assets/images/meal-app.jpeg";
import ExpenseManagerApp from "../assets/images/expense-manager.jpeg";

import CodepenAccount from "../assets/images/codepen-account.png";

export const projectsData = [
  {
    title: "Code Papers",
    description:
      "A CLI-based code editor that makes development a bit faster. If user has storage restrictions on their machine they can install this lightweight code editor from npm. The editor runs in browser and makes development fast and easy. Code written can also be saved on disk of machine automatically",
    technologiesUsed: ["React", "Axios", "TypeScript", "ES build"],
    projectImage: CodePapers,
    projectLink: "https://www.npmjs.com/package/code-papers",
    gitHubLink: "https://github.com/iCodeWalker/code-papers",
  },

  {
    title: "UI Library",
    description:
      "A UI library build with a purpose of providing pre-built components to user that  can save developers time and effort in designing and implementing user interface elements from scratch. This Library provides more customization options that can be implemented very easily.",
    technologiesUsed: ["React", "react-iocns", "Sass", ""],
    projectImage: TuskininkLibrary,
    projectLink: "https://github.com/iCodeWalker/tuskinink_ui",
    gitHubLink: "https://github.com/iCodeWalker/tuskinink_ui",
  },
  {
    title: "Netflix Clone",
    description:
      "A Clone build using React that mimics the design and styling of the popular streaming service Netflix. Uses 'themoviedb' api for fetching catalog of movies and TV shows. ",
    technologiesUsed: ["React", "Axios", "Netlify", "moviesdb"],
    projectImage: NetflixClone,
    projectLink: "https://netflix-clone-b8e07.web.app/",
    gitHubLink: "https://github.com/iCodeWalker/netflix-clone",
  },

  {
    title: "Nature trips",
    description:
      "A static website that helps users to  explores various tours and treks. Website is Built with primative techniques of using css properties like position, top, left, right and many other css animation properties for making Attractive and eye-catching website.",
    technologiesUsed: ["HMTL5", "Sass", "Netlify", "animations"],
    projectImage: NatureTrips,
    projectLink: "https://nature-trips.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/natours_ui",
  },

  {
    title: "House Buy",
    description:
      "This website provides a platform for potential homebuyers to easily browse and discover new properties available. For now Website is static and is built for implementation of css grid-layout. Website is screen-responsive and is well responsive to small screen size devices.",
    technologiesUsed: ["HTML5", "Sass", "Netlify", "Grid-layout"],
    projectImage: HouseBuy,
    projectLink: "https://house-buy.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/housebuy",
  },

  {
    title: "Resort trips",
    description:
      "This website provides a platform for users to book hotel and resort for vacation funs. For now Website is static and is built for implementation of css flex-layout. Website is screen-responsive and is well responsive to small screen size devices. The website only have one page that shows hotel description.",
    technologiesUsed: ["HTML5", "Sass", "Netlify", "flex-layout"],
    projectImage: ResortTrips,
    projectLink: "https://resort-trips.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/HotelView",
  },
  {
    title: "Amazon Clone",
    description:
      "A Clone build using React that mimics the design and styling of the popular e-commerce gaint Amazon. The clone wesbite has active cart functionality, that enable users to add item to cart. The data used is show the items on website is static. ",
    technologiesUsed: ["React", "Axios", "Netlify", "Redux"],
    projectImage: AmazonClone,
    projectLink: "https://amaazon-clone.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/amazon-clone",
  },

  {
    title: "Traders Block",
    description:
      "A React Web app of a trading website. It consists of a basic layout of one the sections from navigation of the app. The website also has a toggle theme option that toggles the theme between light and dark.",
    technologiesUsed: ["React", "Axios", "Netlify", "react-icons"],
    projectImage: TradersBlock,
    projectLink: "https://tradersblock.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/Traders_layout",
  },

  {
    title: "Transpile & Bundle",
    description:
      "A React app that uses es build for transpile and bundling the JavaScript code. User can write their JavaScript code and view thier transpiled and bundled code below.",
    technologiesUsed: ["React", "Axios", "Netlify", "es build"],
    projectImage: TranspileBundle,
    projectLink: "https://transpliebundle.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/esbuild_demo",
  },

  {
    title: "Poker Buz",
    description:
      "An online poker game built using React. The user receives some amount when tha game starts. On every reveal of the cards a certain amount ($2) is deducted from the amount. If all 3 cards are Black spades, an amount of ($5) is added in the amount. ",
    technologiesUsed: ["React", "Redux", "Netlify", "react-icons"],
    projectImage: PokerBuz,
    projectLink: "https://pokerbuz.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/PokerGame",
  },
  {
    title: "SpaceX Programs",
    description:
      "A React app that has details of all the SpaceX launch programs. The app has a side navigation which can be used to filter the launch programs by year. The filter also have options to filter for successfull launch and successfull landing of the SpaceX programs.",
    technologiesUsed: ["React", "API", "Netlify", "react-icons"],
    projectImage: SpaceX,
    projectLink: "https://spacexprogramdata.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/SpaceX",
  },

  {
    title: "Porto-Forge",
    description:
      "A React app that helps users to build an online portfolio. The user have to provide some details about their education, experience, projects etc. Using these details the App will create an online portfolio that they can share with the employers. It also helps them to create an online presence.",
    technologiesUsed: ["React", "Redux", "Git", "react-icons"],
    projectImage: PortoForge,
    projectLink: "https://github.com/iCodeWalker/portfolio-app",
    gitHubLink: "https://github.com/iCodeWalker/portfolio-app",
  },

  {
    title: "Blog I App",
    description:
      "A React Blogging app that a user can use to share there thoughts online.",
    technologiesUsed: ["React", "Netlify", "react-icons"],
    projectImage: BlogApp,
    projectLink: "https://blogiapp.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/blogingApp",
  },
  {
    title: "POS App",
    description:
      "A React app that implements the cart functionality of an e-commerce website. A user can perform all the functions the are specific to cart.",
    technologiesUsed: ["React", "Netlify", "react-icons", "Redux"],
    projectImage: POS,
    projectLink: "https://amazing-app.netlify.app/",
    gitHubLink: "https://github.com/iCodeWalker/posapp",
  },

  // React native apps

  {
    title: "Group Chat app",
    description:
      "A React Native mobile app that hepls users to connect. Users can create a group and other users can join it. In the group users can share what they want, they can talk and connect in this group. The UI of the App is similar to WhatsApp.",
    technologiesUsed: ["React Native", "Axios", "firebase", "firestore"],
    projectImage: GroupChat,
    projectLink: "https://github.com/iCodeWalker/group-chat-app",
    gitHubLink: "https://github.com/iCodeWalker/group-chat-app",
  },

  {
    title: "Zomato Clone",
    description:
      "A Clone of Zomato (Online food ordering app) built using React Native. The app is built with a component-based approach. The app is functional and has many UI components.",
    technologiesUsed: ["React Native", "Axios", "Netlify", "Redux"],
    projectImage: ZomatoClone,
    projectLink: "https://github.com/iCodeWalker/zomato-clone",
    gitHubLink: "https://github.com/iCodeWalker/zomato-clone",
  },

  // Flutter Application

  {
    title: "Expense Manager",
    description:
      "A Mobile application built using flutter framework. The mobile app can be used for managing the expense with in a week. The App also show graphical representation of the expenses on a particular day.",
    technologiesUsed: ["Flutter", "Dart"],
    projectImage: ExpenseManagerApp,
    projectLink: "https://github.com/iCodeWalker/flutter_expensemanager",
    gitHubLink: "https://github.com/iCodeWalker/flutter_expensemanager",
  },

  {
    title: "Meal App",
    description:
      "A Mobile application built using flutter framework. The app has different cuisines options and and details about the dish. Also includes the ingredients and steps to follow to make the dish. Have a slide navigation also. User can add a dish to favourites also.",
    technologiesUsed: ["Flutter", "Dart"],
    projectImage: MealApp,
    projectLink: "https://github.com/iCodeWalker/flutter_mealapp",
    gitHubLink: "https://github.com/iCodeWalker/flutter_mealapp",
  },

  {
    title: "Animation Widgets",
    description: "A flutter application that have all Animation-Widgets.",
    technologiesUsed: ["Flutter", "Dart", "Animation-Widgets"],
    projectImage: "",
    projectLink: "https://github.com/iCodeWalker/flutter_animation_widget",
    gitHubLink: "https://github.com/iCodeWalker/flutter_animation_widget",
  },

  // Code Pen

  {
    title: "Code Pen: Works",
    description:
      "All the pens build on Code Pen: Includes Grid-layout Basics, Flex-box, Sass basic and more.",
    technologiesUsed: ["Sass", "HTML", "React", "JavaScript"],
    projectImage: CodepenAccount,
    projectLink: "https://codepen.io/Kadwey",
    gitHubLink: "#",
  },

  // Node App

  {
    title: "Nature Tours App",
    description:
      "A node js application that has details about tours, the data is stored in MongoDB, Pug is used for making the view of app. The app is deployed on the render.",
    technologiesUsed: ["Node", "MongoDB", "Render", "Pug"],
    projectImage: NatureToursNode,
    projectLink: "https://naturetours.onrender.com",
    gitHubLink: "https://github.com/iCodeWalker/NatourProjectAPI",
  },
];
