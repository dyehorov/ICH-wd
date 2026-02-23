import { useState, useContext } from "react"
import LanguageContext from "../../context/languageContext"

export default function LanguageProvider() {
  const [currentLanguage, setCurrentLanguage] = useState(null)

  return <LanguageContext.Provider></LanguageContext.Provider>
}
