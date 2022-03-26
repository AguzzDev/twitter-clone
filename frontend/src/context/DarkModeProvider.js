import DarkModeContext from "./DarkModeContext"

const DarkModeProvider = ({ children }) => {
  const handleClick1 = () => {
    localStorage.theme = "light"
    document.documentElement.classList.add("light")
    document.documentElement.classList.remove("dark")
  }
  const handleClick2 = () => {
    localStorage.theme = "dark"
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")
  }

  return (
    <DarkModeContext.Provider value={{ handleClick1, handleClick2 }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider
