import { useState } from "react"
import LanguageContext from "../../context/languageContext"

export default function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("english")

  function changeLanguage() {
    setCurrentLanguage(prev => (prev === "english" ? "german" : "english"))
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
