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
import ResidentialPage from "./portfolio/ResidentialPage";

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
        path: "residential",
        element: <ResidentialPage />,
      },
      {
        path: "commercial",
        element: <ResidentialPage />,
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
        path: "consultancy",
        element: <ConsultancyPage />,
      },
      {
        path: "construction",
        element: <ConstructionPage />,
      },
      {
        path: "project",
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
