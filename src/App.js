import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Opportunities from "./pages/Opportunities";
import Faqs from "./pages/Faqs";
import MoneyGenerated from "./pages/MoneyGenerated";
import Clients from "./pages/Clients";
import Entrepreneur from "./pages/blogs/Entrepreneur";
import Launch from "./pages/blogs/Launch";
import ElevenLabsWidget from "./components/ElevenLabsWidget";

function App() {
  const Layout = () => {
    return (
      <div className="main-layout">
        <Navbar />
        <div className="content">
          <Outlet />
          {/* ElevenLabs Conversational AI Widget */}
          {/* <ElevenLabsWidget
            agentId={process.env.REACT_APP_AGENT_ID}
            textOnly={false}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
            }}
          /> */}
          <elevenlabs-convai
            agent-id={process.env.REACT_APP_AGENT_ID}
          ></elevenlabs-convai>
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
          path: "/money-generated",
          element: <MoneyGenerated />,
        },
        {
          path: "/clients",
          element: <Clients />,
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
