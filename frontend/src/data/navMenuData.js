import HomeIcon from "../assets/svg/HomeIcon";
import ExploreIcon from "../assets/svg/ExploreIcon";
import NotificationIcon from "../assets/svg/NotificationsIcon";
import MessagesIcon from "../assets/svg/MessagesIcon";
import SavedIcon from "../assets/svg/SavedIcon";
import ListIcon from "../assets/svg/ListIcon";
import ProfileIcon from "../assets/svg/ProfileIcon";
import AnalyticsIcon from "../assets/svg/AnalyticsIcon";
import CenterHelpIcon from "../assets/svg/CenterHelpIcon";
import KeyboardShortcuts from "../assets/svg/KeyboardShortcutsIcon";
import MomentsIcon from "../assets/svg/MomentsIcon";
import NewsIcon from "../assets/svg/NewsIcon";
import SettingsIcon from "../assets/svg/SettingsIcon";
import ShowIcon from "../assets/svg/ShowIcon";
import TopicsIcon from "../assets/svg/TopicsIcon";
import TwitterAdsIcon from "../assets/svg/TwitterAdsIcon";
import OptionsIcon from "../assets/svg/OptionsIcon";

import { getUser } from "utils/getUser";
import { userWithoutAtSign } from "utils/userWithoutAtSign";

export const navMenuData = [
  {
    link: "/home",
    svg: <HomeIcon className="w-7 dark:text-white fill-current" />,
    text: "Inicio",
  },
  {
    link: "/explore",
    svg: <ExploreIcon className="w-7 dark:text-white fill-current" />,
    text: "Explorar",
  },
  {
    link: "/notifications",
    svg: <NotificationIcon className="w-7 dark:text-white fill-current" />,
    text: "Notificaciones",
  },
  {
    link: "/messages",
    svg: <MessagesIcon className="w-7 dark:text-white fill-current" />,
    text: "Mensajes",
  },
  {
    link: "/saved",
    svg: <SavedIcon className="w-7 dark:text-white fill-current" />,
    text: "Guardados",
  },
  {
    link: "/list",
    svg: <ListIcon className="w-7 dark:text-white fill-current" />,
    text: "Listas",
  },
  {
    link: `/profile/${userWithoutAtSign(getUser?.username)}`,
    svg: <ProfileIcon className="w-7 dark:text-white fill-current" />,
    text: "Perfil",
  },
  {
    link: null,
    svg: <OptionsIcon className="w-7 dark:text-white fill-current" />,
    text: "Mas opciones",
  },
];
