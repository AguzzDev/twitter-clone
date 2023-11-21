import { ArrowLeftIcon } from "@heroicons/react/solid";
import { IconsSm } from "components/icons";
import { useLocation } from "react-router";

export const ProfileNoUser = () => {
  const { pathname } = useLocation();
  return (
    <section className="flex flex-col py-2">
      <div className="flex space-x-3 items-center w-full border-b border-graylight dark:border-bordes pt-2 pb-3 px-2">
        <IconsSm Icon={ArrowLeftIcon} />

        <div className="mb-1 leading-3">
          <h1 className="text-xl font-bold dark:text-white">Perfil</h1>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-bodylight h-[13rem]" />

        <div className="absolute rounded-full top-32 left-5 bg-body">
          <div className="w-32 h-32 border-4 border-body rounded-full bg-bodylight" />
        </div>
      </div>
      <div className="h-12" />
      <div className="flex flex-col w-full px-5">
        <div>
          <h1 className="text-xl font-bold dark:text-white">
            {`@${pathname.split("/")[2]}`}
          </h1>
        </div>
      </div>

      <div className="grid place-content-center mt-10">
        <h1 className="text-3xl font-bold">Esta cuenta no existe</h1>
      </div>
    </section>
  );
};
