import styles from "./styles.module.css"
import ToggleLanguage from "../toggleLanguage"
import LanguageText from "../languageText"

export default function MainComponent() {
  return (
    <div className={styles.mainComponentContainer}>
      <LanguageText />
      <ToggleLanguage />
    </div>
  )
}
