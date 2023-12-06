import HotelMenu from "../../pages/home/components/HotelMenu";
import FlightMenu from "../../pages/home/components/FlightMenu";

import { MenuItemProps } from "../types/menu";

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Hotels",
    component: <HotelMenu />,
  },
  {
    title: "Flights",
    component: <FlightMenu />,
  },
];
