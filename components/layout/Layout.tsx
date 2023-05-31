import React, { PropsWithChildren } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="w-full">{props.children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
