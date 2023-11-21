import LoadingSpinner from "assets/svg/LoadingSpinner";
import React from "react";
import { Link } from "react-router-dom";
import { userWithoutAtSign } from "utils/userWithoutAtSign";

export function SeguirRecomendaciones({ profiles }) {
  return (
    <div className="flex flex-col rounded-2xl bg-bodylight mt-5 h-[25rem]">
      {profiles.loading ? (
        <div className="grid place-content-center min-h-full">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {profiles.data.length > 0 && (
            <div className="h-full">
              <h1 className="text-lg text-black dark:text-white font-bold mx-5 my-3">
                A quién seguir
              </h1>

              <div className="flex flex-col" style={{ height: "70%" }}>
                {profiles.data.map(({ username, name, userImage }, i) => (
                  <Link
                    to={`/profile/${userWithoutAtSign(username)}`}
                    key={i}
                    className="flex space-x-3 hover:bg-gray1 hover:bg-opacity-10 dark:bg-opacity-10 cursor-pointer px-5 py-3"
                  >
                    <img
                      src={userImage}
                      className="w-12 h-12 object-cover rounded-full"
                    />

                    <div>
                      <h1 className="font-semibold text-lg">{name}</h1>
                      <p className="text-sm">{username}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="cursor-pointer" style={{ height: "20%" }}>
                <h1 className="text-sm text-blue1 font-bold mx-5 my-4">
                  Mostrar mas
                </h1>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
