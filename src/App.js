import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Opportunities from "./pages/Opportunities";
import Faqs from "./pages/Faqs";
import Careers from "./pages/Careers";
import MoneyGenerated from "./pages/MoneyGenerated";
import Clients from "./pages/Clients";
import Entrepreneur from "./pages/blogs/Entrepreneur";
import Launch from "./pages/blogs/Launch";

function App() {
  const Layout = () => {
    return (
      <div className="main-layout">
        <Navbar />
        <div className="content">
          <Outlet />
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
          path: "/careers",
          element: <Careers />,
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
