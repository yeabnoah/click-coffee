import React, { ReactNode } from "react";
import Nav from "./header/page";
import Footer from "../footer/page";

interface Props {
  children: ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
