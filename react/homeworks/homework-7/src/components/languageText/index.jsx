import { useContext } from "react"
import LanguageContext from "../../context/languageContext"

const messages = {
  english: { message: "English language was chosen" },
  german: { message: "Deutsch wurde ausgewählt" },
}

export default function LanguageText() {
  const { currentLanguage } = useContext(LanguageContext)

  return (
    <p>
      {currentLanguage === "english"
        ? messages.english.message
        : messages.german.message}
    </p>
  )
}
