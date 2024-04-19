import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

import { useStateContext } from "../../context/Context";

const Settings = () => {
  const {
    settings,
    setSettings,
    currentColor,
    currentMode,
    setMode,
    setColor,
    themeColors,
    t,
  } = useStateContext();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSettings(true);
        }}
        className="fixed z-10 text-2xl font-semibold text-gray-400 dark:text-gray-800 md:dark:text-gray-100 md:text-gray-800 md:bottom-20 right-6 bottom-2 md:right-8 md:text-3xl "
      >
        <CiSettings />
      </button>

      <section
        className={`${settings ? "visible" : "invisible"} fixed z-30 h-full w-full `}
      >
        <div
          onClick={() => setSettings(false)}
          className="absolute top-0 left-0 -z-10 w-full h-full overlay bg-half-transparent-dark"
        ></div>

        <div
          className={`${
            settings ? "translate-x-0" : "translate-x-full"
          } transition-all fixed right-0 h-full p-5 bg-white w-96 dark:bg-secondary-dark-bg dark:text-white`}
        >
          <div className="flex justify-between w-full py-3 text-xl font-semibold">
            <h3>{t("settings")}</h3>
            <button type="button" onClick={() => setSettings(false)}>
              <AiFillCloseCircle />
            </button>
          </div>

          <div className="w-full py-3 border-gray-400 border-t-1">
            <h3 className="mb-4">{t("themeOptions")}</h3>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                checked={currentMode === "light"}
                className="cursor-pointer"
                id="light"
                value="light"
                onChange={setMode}
              />
              <label className="text-sm" htmlFor="light">
                {t("light")}
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                checked={currentMode === "dark"}
                className="cursor-pointer"
                id="dark"
                value="dark"
                onChange={setMode}
              />
              <label className="text-sm" htmlFor="dark">
                {t("dark")}
              </label>
            </div>
          </div>

          <div className="w-full py-3 border-gray-400 border-t-1">
            <h3>{t("themeColors")}</h3>
            <div className="flex items-center mt-5 justify-evenly">
              {themeColors.map(({ color, name }) => (
                <button
                  key={name}
                  onClick={() => setColor(color)}
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                >
                  {color === currentColor && <BsCheckLg />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
