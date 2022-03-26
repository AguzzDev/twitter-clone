import React from "react"

export function SeguirRecomendaciones() {
  return (
    <div
      className="flex flex-col rounded-2xl bg-graylight dark:bg-bodylight mt-5"
      style={{ height: "350px" }}
    >
      <div className="h-full">
        <div style={{ height: "10%" }}>
          <h1 className="text-lg text-black dark:text-white font-bold mx-5 my-3">
            A quién seguir
          </h1>
        </div>
        <div className="flex flex-col" style={{ height: "70%" }}>
          {[1, 2, 3].map(() => (
            <div
              className="hover:bg-gray1 dark:hover:bg-bodylight hover:bg-opacity-10 dark:bg-opacity-10 cursor-pointer"
              style={{ height: "33%" }}
            >
              <div className="mx-5 my-3 overflow-hidden"></div>
            </div>
          ))}
        </div>
        <div className="cursor-pointer" style={{ height: "20%" }}>
          <h1 className="text-sm text-blue1 font-bold mx-5 my-4">
            Mostrar mas
          </h1>
        </div>
      </div>
    </div>
  )
}
