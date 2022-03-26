import React from "react"

export function Trending() {
  return (
    <div
      className="flex flex-col rounded-2xl bg-graylight dark:bg-bodylight mt-5"
      style={{ height: "600px" }}
    >
      <div className="h-full">
        <div style={{ height: "8%" }}>
          <h1 className="text-lg text-black dark:text-white font-bold mx-5 my-3">
            Qué está pasando
          </h1>
        </div>
        <div className="flex flex-col" style={{ height: "80%" }}>
          {[1, 2, 3, 4, 5].map(() => (
            <div
              className="hover:bg-gray1 dark:hover:bg-bodylight hover:bg-opacity-10 dark:bg-opacity-10 cursor-pointer"
              style={{ height: "20%" }}
            >
              <div className="mx-5 my-3 overflow-hidden"></div>
            </div>
          ))}
        </div>
        <div className="cursor-pointer" style={{ height: "12%" }}>
          <h1 className="text-sm text-blue1 font-bold mx-5 my-4">
            Mostrar mas
          </h1>
        </div>
      </div>
    </div>
  )
}
