import { useState } from 'react';
import MobileSideBar from './mobileSideBar';
import DesktopSideBar from './desktopSideBar';
import BurgerMenuSideBar from './burgerMenuSideBar';

const DashboardShell = ({ podcastDb, podcastRss, currentDomain, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* SIDEBAR CONTENT */}
      <MobileSideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        podcastSubdomain={podcastDb.subdomain}
        currentDomain={currentDomain}
      />
      <DesktopSideBar
        podcastSubdomain={podcastDb.subdomain}
        currentDomain={currentDomain}
      />
      {/* END SIDEBAR CONTENT */}

      {/* DASHBOARD CONTENT */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <BurgerMenuSideBar setSidebarOpen={setSidebarOpen} />
        <main
          className="relative z-0 flex-1 pt-2 pb-6 overflow-y-auto focus:outline-none md:py-6"
          tabIndex={0}
        >
          <div className="flex items-center px-4 pb-10 mx-auto max-w-7xl sm:px-6 md:px-8">
            {podcastRss !== null && (
              <img
                src={podcastRss.image.url}
                alt=""
                className="w-20 h-20 rounded"
              />
            )}
            <h1 className="px-6 text-4xl font-semibold text-gray-700">
              {podcastRss.title}
            </h1>
          </div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {children}
          </div>
        </main>
      </div>
      {/* END DASHBOARD CONTENT */}
    </div>
  );
};

export default DashboardShell;
