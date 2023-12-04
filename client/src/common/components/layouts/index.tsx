import { ReactNode } from "react";

import Navbar from "./navbar";

interface LayoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layouts;
