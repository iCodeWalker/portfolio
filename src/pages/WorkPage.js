import React from "react";
import WorkCard from "../components/workCard";
import WorkDescriptionComponent from "../components/workDescriptionComponent";

import NetflixClone from "../assets/images/netflix-clone.png";
import CodePapers from "../assets/images/code-papers.png";
import TuskininkLibrary from "../assets/images/tuskinink-ui-library.png";
import NatureTrips from "../assets/images/natours-ui.png";

import ResortTrips from "../assets/images/resort-trips.png";
import TranspileBundle from "../assets/images/transpile-and-bundle.png";
import TradersBlock from "../assets/images/traders-block.png";
import PokerBuz from "../assets/images/poker-buz.png";
import POS from "../assets/images/e-commerce.png";
import BlogApp from "../assets/images/blog-app.png";
import SpaceX from "../assets/images/space-x.png";

import OutlineButton from "../components/outlineButton";

import "./workPage.scss";

const WorkPage = () => {
  const data = [
    {
      title: "Code Papers",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "TS", "ES build"],
      projectImage: CodePapers,
      projectLink: "https://www.npmjs.com/package/code-papers",
      gitHubLink: "https://github.com/iCodeWalker/code-papers",
    },

    {
      title: "UI Library",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: TuskininkLibrary,
      projectLink: "https://github.com/iCodeWalker/tuskinink_ui",
      gitHubLink: "https://github.com/iCodeWalker/tuskinink_ui",
    },
    {
      title: "Netflix Clone",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: NetflixClone,
      projectLink: "https://netflix-clone-b8e07.web.app/",
      gitHubLink: "https://github.com/iCodeWalker/netflix-clone",
    },

    {
      title: "Nature trips",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: NatureTrips,
      projectLink: "https://nature-trips.netlify.app/",
      gitHubLink: "https://github.com/iCodeWalker/natours_ui",
    },

    {
      title: "Transpile & Bundle",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: TranspileBundle,
      projectLink: "https://transpliebundle.netlify.app/",
      gitHubLink: "https://github.com/iCodeWalker/esbuild_demo",
    },

    {
      title: "Resort trips",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: ResortTrips,
      projectLink: "https://resort-trips.netlify.app/",
      gitHubLink: "https://github.com/iCodeWalker/HotelView",
    },

    {
      title: "Traders Block",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: TradersBlock,
      projectLink: "https://tradersblock.netlify.app/",
      gitHubLink: "https://github.com/iCodeWalker/Traders_layout",
    },

    {
      title: "Poker Buz",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: PokerBuz,
      projectLink: "https://pokerbuz.netlify.app/",
      gitHubLink: "https://github.com/iCodeWalker/PokerGame",
    },

    {
      title: "POS App",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: POS,
      projectLink: "https://amazing-app.netlify.app/",
      gitHubLink: "https://github.com/iCodeWalker/posapp",
    },

    {
      title: "Blog I App",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: BlogApp,
      projectLink: "https://blogiapp.netlify.app/",
      gitHubLink: "https://github.com/iCodeWalker/blogingApp",
    },

    {
      title: "SpaceX Programs",
      description:
        " A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repo stats. Includes data of your top languages, starred repositories.",
      technologiesUsed: ["React", "Axios", "firebase", "react-icons"],
      projectImage: SpaceX,
      projectLink: "https://spacexprogramdata.netlify.app/",
      gitHubLink: "https://github.com/iCodeWalker/SpaceX",
    },
  ];
  return (
    <div className="work-section">
      <p className="heading-secondary">Works :</p>
      {data.map((item, index) => {
        return (
          <WorkDescriptionComponent
            key={index}
            title={item.title}
            description={item.description}
            technologiesUsed={item.technologiesUsed}
            projectImage={item.projectImage}
            projectLink={item.projectLink}
            gitHubLink={item.gitHubLink}
          />
        );
      })}

      <h2 className="heading-secondary u-margin-bottom-big">
        More About Work :
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => {
          return (
            <WorkCard
              key={index}
              title={item.title}
              description=" A nicer look at your GitHub profile and repo stats. Includes data
          visualizations of your top languages, starred repositories, and sort
          through your top repos by number of stars, forks, and size. A nicer
          look at your GitHub profile and repo stats. Includes data
          visualizations of your top languages, starred repositories, and sort
          through your top repos by number of stars, forks, and size."
              technologiesList={item.technologiesUsed}
              projectImage={item.projectImage}
              gitLink={item.gitHubLink}
              externalLink={item.projectLink}
            />
          );
        })}
      </div>

      <div className="center u-margin-top-big">
        <OutlineButton title="See More" />
      </div>
    </div>
  );
};

export default WorkPage;
