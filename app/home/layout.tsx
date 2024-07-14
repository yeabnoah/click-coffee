import React, { ReactNode } from "react";
import Nav from "./header/page";
import Footer from "../footer/page";
import SideBar from "./sidebar/page";

interface Props {
  children: ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      <div className=" flex flex-col">
        {children}
        <SideBar />
      </div>

      <Footer />
    </div>
  );
};

export default HomeLayout;
