import { MENU_ITEMS } from "../../../common/constants/menu";

interface MenuProps {
  activeMenu: string;
}

const Menu = ({ activeMenu }: MenuProps) => {
  const menus = MENU_ITEMS.filter((item) => item.title === activeMenu);

  return <>{menus?.map((menu) => menu.component)}</>;
};

export default Menu;
