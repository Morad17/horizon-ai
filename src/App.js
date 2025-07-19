import React, { useEffect, useState } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Opportunities from "./pages/Opportunities";
import Faqs from "./pages/Faqs";
import Entrepreneur from "./pages/blogs/Entrepreneur";
import Launch from "./pages/blogs/Launch";
import useIsMobileOrTablet from "./hooks/useIsMobileOrTablet";
import NavMobile from "./components/NavMobile";

function App() {
  const [agentId, setAgentId] = useState("");

  useEffect(() => {
    fetch("/.netlify/functions/elevenLabs")
      .then((res) => res.json())
      .then((data) => setAgentId(data.agentId));
  }, []);

  const Layout = () => {
    const isMobileOrTablet = useIsMobileOrTablet();

    return (
      <div className="main-layout">
        {isMobileOrTablet ? <NavMobile /> : <Navbar />}
        <div className="content">
          <Outlet />
          {agentId && (
            <elevenlabs-convai
              agent-id={agentId}
              style={{ zIndex: "1111" }}
            ></elevenlabs-convai>
          )}
          <Footer />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/faq",
          element: <Faqs />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/opportunities",
          element: <Opportunities />,
        },
        {
          path: "/blog-entrepeneurship",
          element: <Entrepreneur />,
        },
        {
          path: "/blog-launch",
          element: <Launch />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
