import { HomeIcon } from "@heroicons/react/20/solid";
import { GoDotFill } from "react-icons/go";
import { useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const currentPage = location.pathname.split("/");
  // console.log(currentPage);

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex absolute text-4xl ml-[1rem] top-[34rem] sm:text-8xl md:text-7xl md:top-[42rem] md:w-full md:ml-[2rem] lg:text-6xl lg:ml-20 lg:top-[28rem] lg:w-3/5"
    >
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-white hover:text-gray-200">
              <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <GoDotFill
              aria-hidden="true"
              className="h-3 w-3 flex-shrink-0 text-white"
            />
            <a
              href="#"
              className="ml-2 text-2xl font-medium text-white hover:text-gray-200"
            >
              {currentPage[1]}
            </a>
            {currentPage[2] && (
              <>
                <GoDotFill
                  aria-hidden="true"
                  className="h-3 w-3 flex-shrink-0 text-white"
                />
                <a
                  href="#"
                  className="ml-4 text-2xl font-medium text-[#F1ACA5] hover:text-gray-200"
                >
                  {currentPage[2]}
                </a>
              </>
            )}
          </div>
        </li>
        {/* ))} */}
      </ol>
    </nav>
  );
}
