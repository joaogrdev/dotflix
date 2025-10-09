import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Header />
      <main className="flex-1 p-4 mt-30 tablet:mt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
