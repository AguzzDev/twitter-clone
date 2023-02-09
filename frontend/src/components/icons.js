import React from "react"

export function IconsSm({ Icon, props }) {
  return <Icon className={`w-5 h-5 text-black dark:text-white ${props}`} />
}
export function IconsSmd({ Icon }) {
  return <Icon className="text-black w-7 h-7 dark:text-white" />
}
export function IconsMd({ Icon }) {
  return <Icon className="w-10 h-10 text-black dark:text-white" />
}
