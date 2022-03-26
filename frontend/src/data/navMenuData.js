import HomeIcon from "../assets/svg/HomeIcon"
import ExploreIcon from "../assets/svg/ExploreIcon"
import NotificationIcon from "../assets/svg/NotificationsIcon"
import MessagesIcon from "../assets/svg/MessagesIcon"
import SavedIcon from "../assets/svg/SavedIcon"
import ListIcon from "../assets/svg/ListIcon"
import ProfileIcon from "../assets/svg/ProfileIcon"
import AnalyticsIcon from "../assets/svg/AnalyticsIcon"
import CenterHelpIcon from "../assets/svg/CenterHelpIcon"
import KeyboardShortcuts from "../assets/svg/KeyboardShortcutsIcon"
import MomentsIcon from "../assets/svg/MomentsIcon"
import NewsIcon from "../assets/svg/NewsIcon"
import SettingsIcon from "../assets/svg/SettingsIcon"
import ShowIcon from "../assets/svg/ShowIcon"
import TopicsIcon from "../assets/svg/TopicsIcon"
import TwitterAdsIcon from "../assets/svg/TwitterAdsIcon"
import OptionsIcon from "../assets/svg/OptionsIcon"

export const navMenuData = [
  {
    link: "home",
    svg: <HomeIcon className="w-7 dark:text-white fill-current" />,
    text: "Inicio",
  },
  {
    link: "explore",
    svg: <ExploreIcon className="w-7 dark:text-white fill-current" />,
    text: "Explorar",
  },
  {
    link: "notifications",
    svg: <NotificationIcon className="w-7 dark:text-white fill-current" />,
    text: "Notificaciones",
  },
  {
    link: "messages",
    svg: <MessagesIcon className="w-7 dark:text-white fill-current" />,
    text: "Mensajes",
  },
  {
    link: "saved",
    svg: <SavedIcon className="w-7 dark:text-white fill-current" />,
    text: "Guardados",
  },
  {
    link: "list",
    svg: <ListIcon className="w-7 dark:text-white fill-current" />,
    text: "Listas",
  },
  {
    link: "profile",
    svg: <ProfileIcon className="w-7 dark:text-white fill-current" />,
    text: "Perfil",
  },
  {
    text: "Mas opciones",
    svg: <OptionsIcon className="w-7 dark:text-white fill-current" />,
    items: [
      {
        svg: <TopicsIcon className="w-7 dark:text-white fill-current" />,
        text: "Temas",
      },
      {
        svg: <MomentsIcon className="w-7 dark:text-white fill-current" />,
        text: "Momentos",
      },
      {
        svg: <NewsIcon className="w-7 dark:text-white fill-current" />,
        text: "Boletines informativos",
      },
      {
        svg: <TwitterAdsIcon className="w-7 dark:text-white fill-current" />,
        text: "Twitter Ads",
      },
      {
        svg: <AnalyticsIcon className="w-7 dark:text-white fill-current" />,
        text: "Analytics",
      },
      {
        svg: <SettingsIcon className="w-7 dark:text-white fill-current" />,
        text: "Configuración y privacidad",
      },
      {
        svg: <CenterHelpIcon className="w-7 dark:text-white fill-current" />,
        text: "Centro de ayuda",
      },
      {
        svg: <ShowIcon className="w-7 dark:text-white fill-current" />,
        text: "Mostrar",
      },
      {
        svg: <KeyboardShortcuts className="w-7 dark:text-white fill-current" />,
        text: "Atajos de teclado",
      },
    ],
  },
]
