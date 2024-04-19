import { RiReactjsLine } from "react-icons/ri";
import { BiCodeBlock } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { FaJava } from 'react-icons/fa';
import { FaDatabase } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiApachemaven } from "react-icons/si";
import { TbBrandCucumber } from "react-icons/tb";
import { SiApachejmeter } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiLinux } from "react-icons/di";
import { FaJira } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiSpringboot } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#F55050");
  const [currentMode, setCurrentMode] = useState("dark");
  const { t, i18n } = useTranslation();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("ThemeMode", e.target.value);
    setSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setSettings(false);
  };

  const navItems = [
    {
      name: t("navItem1"),
      href: "home",
    },
    {
      name: t("navItem2"),
      href: "about",
    },
    {
      name: t("navItem3"),
      href: "Skills",
    },
    {
      name: t("navItem4"),
      href: "portfolio",
    },
    {
      name: t("navItem5"),
      href: "contact",
    },
  ];

  // THEME COLORS
  const themeColors = [
    {
      name: "blue-theme",
      color: "#1A97F5",
    },
    {
      name: "green-theme",
      color: "#03C9D7",
    },
    {
      name: "purple-theme",
      color: "#7352FF",
    },
    {
      name: "red-theme",
      color: "#F55050",
    },
    {
      name: "indigo-theme",
      color: "#3F72AF",
    },
    {
      color: "#F55302",
      name: "orange-theme",
    },
  ];

  // ABOUT ME PAGE DATA
  const aboutData = [
    {
      skill: t("aboutSkills1"),
      description: t("aboutSkills1Description1"),
      icon: <BiCodeBlock />,
    },
    {
      skill: t("aboutSkills2"),
      description: t("aboutSkills1Description2"),
      icon: <BiCodeBlock />,
    },
    {
      skill: t("aboutSkills3"),
      description: t("aboutSkills1Description3"),
      icon: <BsArrowRepeat />,
    },
    {
      skill: t("aboutSkills5"),
      description: t("aboutSkills1Description5"),
      icon: <BiCodeBlock />,
    },
  ];

  // SKILLS PAGE DATA
  const skillsData = [
    {
      skill: t("java"),
      icon: <FaJava />,
    },
    {
      skill: t("C#"),    
      icon: <SiCsharp />,  
    },
    {
      skill: t("html"),
      icon: <AiOutlineHtml5 />,
    },
    {
      skill: t("css"),
      icon: <FaCss3 />,
    },
    {
      skill: t("js"),
      icon: <TbBrandJavascript />,
    },
    {
      skill: t("SQL"),
      icon: <FaDatabase />,
    },
    {
      skill: t("node"),
      icon: <FaNodeJs />,
    },
    {
      skill: t("react"),
      icon: <RiReactjsLine />,
    },
    {
      skill: t("jquery"),
      icon: <SiJquery />,
    },
    {
      skill: t("net"),
      icon: <SiDotnet />,
    },
    {
      skill: t("spring"),
      icon: <SiSpringboot />,
    },
    {
      skill: t("maven"),
      icon: <SiApachemaven />,
    },
    {
      skill: t("Selenium"),
      icon: <SiSelenium />,
    },
    {
      skill: t("cucumber"),
      icon: <TbBrandCucumber />,
    },
    {
      skill: t("jmeter"),
      icon: <SiApachejmeter />,
    },
    {
      skill: t("Jenkins"),
      icon: <FaJenkins />,
    },
    {
      skill: t("Docker"),
      icon: <FaDocker />,
    },
    {
      skill: t("Postman"),
      icon: <SiPostman />,
    },
    {
      skill: t("Git"),
      icon: <FaGitAlt />,
    },
    {
      skill: t("gitHub"),
      icon: <BsGithub />,
    },
    {
      skill: t("AWS"),
      icon: <FaAws />,
    },
    {
      skill: t("linux"),
      icon: <DiLinux />,
    },
    {
      skill: t("jira"),
      icon: <FaJira />,
    },
    {
      skill: t("mysql"),
      icon: <SiMysql />,
    },

  ];

  // PORTFOLIO TITTLE
  const portfolioTitle = [

    {
      name: t("testing"),
      activetab: [true, false, false, false],
    },
    {
      name: t("challenges"),
      activetab: [false, true, false, false],
    },
    {
      name: t("fullStackApp"),
      activetab: [false, false,true, false],
    },
    {
      name: t("webApp"),
      activetab: [false, false, false, true],
    },
  ];

  // PORTFOLIO PAGE DATA
  const portfolioData = [
    {

      testing: [
        {
          title: t("Testing"),
          projectName: t("projectName0"),
          pic: "bg-DigitalRepair",
          githubLink: "https://github.com/ophney/TestAutomationTask",
         
        },
        {
          title: t("Testing"),
          projectName: t("projectName1"),
          pic: "bg-dashboard",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        },
        {
          title: t("Testing"),
          projectName: t("projectName2"),
          pic: "bg-weatherforecast",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        },
        {
          title: t("Testing"),
          projectName: t("projectName3"),
          pic: "bg-musicPlayer",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        }
      ],

      webApp: [
       
        {
          title: t("Web App"),
          projectName: t("projectName4"),
          pic: "bg-alannews",
          githubLink: "https://github.com/ophney/Ophney-Portfolio.git",
          viewOnline: "https://ophney-portfolio.vercel.app/",
        },
        {
          title: t("Web App"),
          projectName: t("projectName5"),
          pic: "bg-cryptocurrency",
          githubLink: "https://github.com/ophney/Ophney-Mbedzi-Portfolio-Website",
          viewOnline: "https://ophney.netlify.app/",
        },
        {
          title: t("Web App"),
          projectName: t("projectName6"),
          pic: "bg-littleProject",
          githubLink: "https://github.com/ophney/Simple-Calculator",
          viewOnline: "https://github.com/ophney/Simple-Calculator",
        },
              
        {
          title: t("Web App"),
          projectName: t("projectName7"),
          pic: "bg-GPT3",
          githubLink: "https://github.com/ophney/SA-ID-Validation",
          viewOnline: "https://sa-id-validation.netlify.app/",
        }
      ],

      challenges: [
 
        {
          title: t("Code Challenges"),
          projectName: t("projectName8"),
          pic: "bg-business",
          githubLink: "https://github.com/ophney/Palindrome_Checker",
         
        },
        {
          title: t("Code Challenges"),
          projectName: t("projectName9"),
          pic: "bg-dashboardUI",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        },
        {
          title: t("Code Challenges"),
          projectName: t("projectName10"),
          pic: "bg-legends_landingpage",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        },
               
        {
          title: t("Code Challenges"),
          projectName: t("projectName11"),
          pic: "bg-SomeGames",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        }
      ],

      fullStackApp: [

        {
          title: t("Full Stack App"),
          projectName: t("projectName12"),
          pic: "bg-quizapp",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        },
        {
          title: t("Full Stack App"),
          projectName: t("projectName13"),
          pic: "bg-SportWebsiteUI",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        },
        {
          title: t("Full Stack App"),
          projectName: t("projectName14"),
          pic: "bg-dashboardUI",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        },
        {
          title: t("Full Stack App"),
          projectName: t("projectName15"),
          pic: "bg-littleProject",
          githubLink: "https://github.com/ophney/",
          viewOnline: "https://github.com/ophney/",
        }
      ],

    },
  ];

  //todo Data
  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        settings,
        setSettings,
        currentMode,
        setCurrentMode,
        currentColor,
        setCurrentColor,
        t,
        i18n,
        setMode,
        setColor,
        navItems,
        themeColors,
        aboutData,
        skillsData,
        portfolioTitle,
        portfolioData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
