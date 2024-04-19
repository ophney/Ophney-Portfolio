import { useStateContext } from "../../context/Context";

const Skills = () => {
  const { currentColor, skillsData, t } = useStateContext();

  return (
    <div className="activeSection w-full min-h-screen mx-auto md:w-4/5 flex flex-col pt-20">
      <div>
        <div className="relative mb-10">
          <h3 className="text-xl absolute left-1/2 -translate-x-1/2 z-10 rtl:font-TitrPlus">
            {t("skills")}
          </h3>
          <span
            style={{ background: currentColor }}
            className="left-1/2 -top-1.5 -translate-x-1/2 rounded-full absolute w-8 h-8"
          ></span>
        </div>

        <h1 className="text-2xl md:text-4xl my-5 text-center rlt:font-casablanca ltr:font-summer">
          {t("seeSkills")}
        </h1>
        <div
          style={{ background: currentColor }}
          className="w-3/5 md:w-2/5 mx-auto h-1"
        >
          <div className="relative bg-main-bg dark:bg-main-dark-bg w-10 h-1 left-2/4 -translate-x-2/4 rtl:-left-2/4 rtl:translate-x-2/4">
            <span className="absolute rounded-full rtl:mx-0 rtl:left-2 w-2 h-1 mx-2 bg-black dark:bg-white"></span>
            <span className="absolute rounded-full rtl:mx-0 rtl:left-6 left-4 w-2 h-1 mx-2 bg-black dark:bg-white"></span>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
        {skillsData.map(({ icon, skill }, index) => (
          <div key={index} className="item flex flex-col items-center p-4 rounded-lg shadow-md hover:bg-gray-100">
            <h2 className="text-xl">{icon}</h2>
            <h3 className="text-xl font-summer">{skill}</h3>
          </div>
        ))}
        <style>
          {`
            .item:hover {
              background: ${currentColor === 'black' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Skills;
