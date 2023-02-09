import Verified from "../../assets/svg/Verified"
import { getUser } from "utils/getUser"
import Owner from "assets/svg/Owner"

const Emote = () => (
  <>
    {getUser.range === "own" ? (
      <Owner className="w-5 h-5" />
    ) : getUser.range === "verified" ? (
      <Verified className="fill-current text-blue1 dark:text-white w-5 h-5 ml-1 mr-2" />
    ) : null}
  </>
)
export const UserVerificate = () => {
  return (
    <div className="flex items-center">
      <h1>{getUser.name}</h1>
      <Emote />
      <h1 className="ml-2">{getUser.username}</h1>
    </div>
  )
}
export const UserVerificateNav = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <h1 className="mr-1">{getUser.name}</h1>
        <Emote />
      </div>
      <h1>{getUser.username}</h1>
    </div>
  )
}

export const UserVerificate3 = ({ range, name, username }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <h1>{name}</h1>
        {range === "own" ? (
          <Owner className="w-5 h-5" />
        ) : range === "verified" ? (
          <Verified className="fill-current text-blue1 dark:text-white w-5 h-5" />
        ) : null}
      </div>
      <h1>{username}</h1>
    </div>
  )
}

export const UserVerificateRow = ({ range, name, username }) => {
  return (
    <div className="flex items-center">
      <h1>{name}</h1>
      <div className="ml-1 mr-2">
        {range === "own" ? (
          <Owner className="w-5 h-5" />
        ) : range === "verified" ? (
          <Verified className="fill-current text-blue1 dark:text-white w-5 h-5" />
        ) : null}
      </div>
      <h1>{username}</h1>
    </div>
  )
}
