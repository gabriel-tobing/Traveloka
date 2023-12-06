import { ReactNode } from "react";

import Navbar from "./navbar";
import Modal from "./modal";

interface LayoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Modal /> */}
    </div>
  );
};

export default Layouts;
