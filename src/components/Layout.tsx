import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import ParticleBackground from './ParticleBackground';

const Layout = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('Home');

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPage = pathSegments.length > 0 
      ? pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1) 
      : 'Home';
    
    setPageTitle(currentPage);
    document.title = `${currentPage} | CyberSecurity Portfolio`;
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Header currentPage={pageTitle} />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;