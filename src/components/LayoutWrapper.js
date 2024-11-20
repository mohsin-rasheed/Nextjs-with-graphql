'use client'; // This is necessary for client-side hooks to work

import { usePathname } from 'next/navigation'; // Import usePathname hook
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from "../components/Footer";

export const metadata = {
  title: 'Todo App',
  description: 'This is my Next.js app with App Router',
};

function LayoutWrapper({ children }) {
  
  const pathname = usePathname(); // Get the current route

  // Check if the current route is '/login'
  const isLoginPage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Todo App</title>
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
      </head>
      <body>
        {/* If it's not the login page, render Navbar, Sidebar, and Footer */}
        {!isLoginPage && (
          <>
            <Navbar />
            <div id="layoutSidenav">
              <Sidebar />
              <div id="layoutSidenav_content">
                {children} {/* The children will be the page content */}
                <Footer />
              </div>
            </div>
          </>
        )}
        
        {/* If it's the login page, only render the children (login form) */}
        {isLoginPage && <>{children}</>}

        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}

export default LayoutWrapper;
