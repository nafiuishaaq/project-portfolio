import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioLayout from "./appLayouts/PortfolioLayout";
import AllProjectList from "./portfolio/AllProjectList";
import ServicesLayout from "./appLayouts/ServicesLayout";
import BuildingPage from "./services/BuildingPage";
import ConsultancyPage from "./services/ConsultancyPage";
import ConstructionPage from "./services/ConstructionPage";
import ProjectPage from "./services/ProjectPage";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <PortfolioLayout />,
    children: [
      {
        index: true,
        element: <AllProjectList />,
      },
      {
        path: "/portfolio/residential",
        element: <AllProjectList />,
      },
      {
        path: "/portfolio/commercial",
        element: <AllProjectList />,
      },
    ],
  },
  {
    path: "/services",
    element: <ServicesLayout />,
    children: [
      {
        index: true,
        element: <BuildingPage />,
      },
      {
        path: "/services/consultancy",
        element: <ConsultancyPage />,
      },
      {
        path: "/services/construction",
        element: <ConstructionPage />,
      },
      {
        path: "/services/project",
        element: <ProjectPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
