// Importing necessary modules from React and other files
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, Settings, GetinTouch } from "./components";
import { useStateContext } from "./context/Context";
import "./App.css"; // Importing styles
import Loading from "./components/Loading/Loading"; // Importing loading component

// Defining the main component App
const App = () => {
  const navigate = useNavigate(); // Hook for navigating between routes
  const {
    loading, // State for loading indicator
    setLoading, // Function to set loading state
    currentMode, // State for current theme mode (dark or light)
    setCurrentMode, // Function to set current theme mode
    currentColor, // State for current color theme
    setCurrentColor, // Function to set current color theme
  } = useStateContext(); // Custom hook to access global state

  // Effect to load theme and color preferences from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("ThemeMode");
    const color = localStorage.getItem("colorMode");

    if (theme || color) {
      setCurrentMode(theme || "dark"); // Setting theme mode
      setCurrentColor(color || "#F55050"); // Setting color theme
    }

  }, [currentColor, currentMode]); // Dependencies: currentColor and currentMode

  // Effect to handle initial loading and redirect if necessary
  useEffect(() => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "" ||
      window.location.pathname === "/portfolio" ||
      window.location.pathname === "/portfolio/"
    ) {
      navigate("./home"); // Redirecting to "/home" if current path matches certain conditions
    }

    setLoading(true); // Setting loading state to true
    setTimeout(() => {
      setLoading(false); // Setting loading state to false after 1500ms
    }, 1500);
  }, []); // Empty dependency array, runs only once on initial render

  // Effect for title animation (not fully implemented)
  useEffect(() => {
    setTimeout(() => {
      var currentState = false;
      var mainTitle = document.querySelector("title").innerHTML;

      setInterval(startAnimation, 2600); // Starting animation every 2600ms

      function startAnimation() {
        document.querySelector("title").innerHTML; // Incomplete, doesn't update title
        currentState = !currentState; // Toggling current state
      }
    }, 3000);
  }, [document.title]); // Dependency: document title, not recommended

  // Rendering the main component
  return (
    <section
      className={`${
        currentMode === "dark" ? "dark" : ""
      } rtl:font-soltan font-robotoBold `}
    >
      <div className="text-gray-800 bg-main-bg dark:bg-main-dark-bg dark:text-gray-200">
        {/* Custom scrollbar styles */}
        <style>
          {`::-webkit-scrollbar{
                            width: 0.5rem !important;
                            background: gray !important;
                        }`}
          {`::-webkit-scrollbar-thumb{
                            background: ${currentColor} !important;
                        }`}
        </style>
        {/* Conditional rendering based on loading state */}
        {loading ? (
          <Loading /> // Showing loading component
        ) : (
          <> 
            <Navbar /> {/* Navbar component */}
            <Settings /> {/* Settings component */}
            <GetinTouch /> {/* Get in touch component */}
            <Outlet /> {/* Renders nested routes */}
          </> 
        )}
      </div>
    </section>
  );
};

export default App; // Exporting main component
