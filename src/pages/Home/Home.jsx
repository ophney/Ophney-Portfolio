import { useStateContext } from "../../context/Context";
import Snowfall from "react-snowfall";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import { MePic } from "../../assets/dummy";
import Styles from "./Home.module.css";
import CVfile from "../../assets/Ophney_Mbedzi_CV.pdf";

const Home = () => {
  const { currentColor, t } = useStateContext();

  return (
    <>
      <div className={`activeSection h-screen w-full flex flex-col items-start justify-center md:pl-48 p-10 gap-14 overflow-hidden`}>
        <Snowfall
          style={{
            opacity: "0.5",
          }}
          color={currentColor}
          snowflakeCount={80}
          speed={[0.5, 2]}
        />

        <div className="relative w-52">
          <h2 className="absolute z-10 text-xl font-semibold rtl:font-casablanca ">
            {t("myName")}
          </h2>
          <span
            style={{ background: currentColor }}
            className={`rtl:-right-3 rtl:-top-3 absolute -left-4 -top-2 w-10 h-10 rounded-full`}
          ></span>
        </div>

        <h1 className="p-2 text-3xl font-semibold md:text-4xl lg:text-5xl ltr:font-roboto-bold">
          {t("im")}
          <span className="titleSkills">
            {
              <Typewriter
                words={[t("SoftwareDeveloper"), t("SQA")]}
                loop={5}
                typeSpeed={200}
                delaySpeed={2000}
                deleteSpeed={150}
              />
            }
          </span>
          <Cursor />
        </h1>

        <div className="flex items-center justify-center font-semibold gap-x-5">
          <button type="button" className="relative w-32 px-4 py-6 md:w-36 dark:text-gray-800 cursor-grab" style={{ background: currentColor }} id="buttonAnime">
            <h5 className="w-full h-full absolute left-0 top-3.5 z-10">
              {t("welcome")}
            </h5>
            <span
              className={`${Styles["clip-path"]} absolute top-0 left-0 z-0 w-full h-full`}
            ></span>
          </button>

        
          <a href={CVfile} download="Ophney_Mbedzi_CV.pdf">
          <button type="button" className="relative w-32 px-4 py-6 md:w-36 dark:text-gray-800" style={{ background: currentColor }} id="buttonAnime">
            <h5 className="w-full h-full absolute left-0 top-3.5 z-10">
              {t("readMore")}
            </h5>
            <span
              className={`${Styles["clip-path"]} absolute top-0 left-0 z-0 w-full h-full`}
            ></span>
          </button>
          </a>
        </div>

        <div className={`${Styles.me} w-2/5 absolute hidden lg:bottom-35 `}>
          <img src={MePic} alt="me" />
        </div>
      </div>
    </>
  );
};

export default Home;
