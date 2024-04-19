import { useStateContext } from "../../context/Context";
import { ContactPic } from "../../assets/dummy";
import "./ContactMe.css";

const Contact = () => {
  const { currentColor, t } = useStateContext();

  return (
    <div className="activeSection flex flex-col lg:flex-row items-center justify-center min-h-screen p-10 py-20 mx-auto lg:w-4/5">
      {/* Column for the image */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
        <img className="w-full h-auto" src={ContactPic} alt="" />
      </div>

      {/* Column for the contact details */}
      <div className="lg:w-1/2">
        <div className="relative">
          <h2 className="absolute z-10 text-xl rtl:font-semibold rtl:font-TitrPlus ltr:font-summer">
            {t("contact")}
          </h2>
          <span
            style={{ background: currentColor }}
            className="absolute w-10 h-10 rounded-full rtl:-right-4 -left-4 -top-2"
          ></span>
        </div>
        <h1 className="mt-10 mb-5 text-4xl font-semibold ltr:font-robotoBold rtl:font-casablanca ">
          {t("getInTouch")}
        </h1>
        <div
          style={{ background: currentColor }}
          className="w-20 h-1 m-2 mb-4"
        ></div>
        <p className="text-sm text-gray-400">{t("contactDescription")}</p>

        <div className="flex flex-col gap-4 my-10">
          <div className="flex items-center">
            <span className="w-44 text-sm rtl:font-semibold rtl:mr-2">{t("Email Address")}:</span>
            <a href={t("email")} className="text-red-400">{t("email")}</a>
          </div>
          <div className="flex items-center">
            <span className="w-44 text-sm rtl:font-semibold rtl:mr-2">{t("Cellphone Number")}:</span>
            <p className="text-red-400">{t("contactNumber")}</p>
          </div>
          <div className="flex items-center">
            <span className="w-44 text-sm rtl:font-semibold rtl:mr-2">{t("LinkedIn Address")}:</span>
            <a href={t("linkedIn")} target="_blank" rel="noopener noreferrer" className="text-red-400">Click Here</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
