import { useContext } from "react"
import LanguageContext from "../../context/languageContext"

export default function ToggleLanguage() {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext)

  return (
    <button onClick={changeLanguage}>
      {currentLanguage === "english"
        ? "Change Language"
        : "Sprache ändern"}{" "}
    </button>
  )
}
