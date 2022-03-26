import Verified from "../assets/svg/Verified"

export const userVerificate = (name, isAdmin, username) => {
  return (
    <>
      {isAdmin ? (
        <div className="flex items-center">
          <h1>{name}</h1>
          <Verified className="fill-current text-blue1 dark:text-white w-5 h-5 ml-1 mr-2" />
          <h1>{username}</h1>
        </div>
      ) : (
        <div className="flex items-center">
        <h1>{name}</h1>
        <h1 className="ml-2">{username}</h1>
        </div>
      )}
    </>
  )
}
