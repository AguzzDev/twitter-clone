import { ChevronLeftIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import LoadingSpinner from "assets/svg/LoadingSpinner";
import { IconsMd } from "components/icons";
import { SearchInput } from "components/Input/SearchInput";
import Layout from "components/Layout";
import TweetItem from "components/TweetItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
  const { search } = useSelector((state) => state.tweets);
  const { post, user } = search.data;

  return (
    <Layout>
      <section className="px-3 border-b border-bordes">
        <div className="flex gap-x-5 items-center justify-between mt-2">
          <Link to="/home">
            <IconsMd Icon={ChevronLeftIcon} />
          </Link>

          <SearchInput props="w-full" />

          <IconsMd Icon={DotsHorizontalIcon} />
        </div>

        <div className="flex justify-between pt-5 pb-[.2px] mx-4">
          <h2 className="text-base font-bold w-2/4 text-center pb-2 border-b-4 border-blue1">
            Destacado
          </h2>
          <h2 className="text-base font-bold w-2/4 text-center pb-2">
            Personas
          </h2>
        </div>
      </section>

      <section>
        {!post ? (
          <div className="grid place-content-center mt-10">
            <LoadingSpinner />
          </div>
        ) : post.length == 0 ? (
          <div className="grid place-content-center mt-5">
            <h1>No hay tweets con esta busqueda</h1>
          </div>
        ) : (
          post.map((tweet, i) => <TweetItem key={i} tweet={tweet} />)
        )}
      </section>
    </Layout>
  );
};

export default Search;
