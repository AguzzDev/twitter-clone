import { ChevronDoubleUpIcon, MailOpenIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SeguirRecomendaciones } from "./SeguirRecomendaciones";
import { Trending } from "./Trending";
import { IconsSmd } from "./icons";
import { NavMenu } from "./NavMenu";
import { getTrends } from "store/actions/tweets";
import { getAllUsers } from "store/actions/profile";
import { SearchInput } from "components/Input/SearchInput";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { trends } = useSelector((state) => state.tweets);
  const { profiles } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getTrends());
  }, [dispatch]);

  return (
    <main className="relative">
      <section className="flex">
        <section className="h-screen w-[15%] flex justify-end sticky top-0 border-r border-bordes">
          <NavMenu />
        </section>

        <section className="w-[85%] md:w-[50%] border-r shadow-sm border-graylight dark:border-bordes">
          {children}
        </section>

        <section className="hidden md:flex w-[35%] max-h-[65rem] flex-col mb-5">
          <div className="px-8 mt-2">
            <SearchInput />
            <Trending trends={trends} />
            <SeguirRecomendaciones profiles={profiles} />
          </div>
        </section>
      </section>

      <section
        className="fixed z-50 items-center justify-between hidden px-5 py-3 bg-white shadow-xl cursor-pointer dark:bg-body lg:flex -bottom-2 right-10 rounded-xl"
        style={{
          boxShadow:
            "rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px",
          width: "400px",
        }}
      >
        <div className="flex items-center text-xl font-bold ext-black dark:text-white">
          <h1>Mensajes</h1>
        </div>
        <div className="flex items-center">
          <div
            title="Nuevo Mensaje"
            className="p-2 text-black rounded-full fill-current dark:text-white hover:bg-gray-300 dark:hover:bg-bodylight"
          >
            <IconsSmd Icon={MailOpenIcon} />
          </div>
          <div
            title="Expandir"
            className="p-2 text-black rounded-full fill-current dark:text-white hover:bg-gray-300 dark:hover:bg-bodylight"
          >
            <IconsSmd Icon={ChevronDoubleUpIcon} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
