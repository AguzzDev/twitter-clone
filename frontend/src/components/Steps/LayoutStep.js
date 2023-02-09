import React from "react"
import { Logo } from "components/avatar"

export const LayoutStep = ({ children }) => {
  return (
    <section className="flex flex-col px-10 py-3 overflow-hidden min-h-[85vh]">
      <div className="flex justify-center text-gray-300 fill-current">
        <Logo props="w-10 h-10" />
      </div>
      <div className="text-gray-300 flex flex-1 flex-col">{children}</div>
    </section>
  )
}
