import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <main className="flex-grow-1" style={{
        paddingTop: '0px',
        marginTop: '0px',
        position: 'relative',
        zIndex: 1
      }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
