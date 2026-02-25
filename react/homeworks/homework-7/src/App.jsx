import "./App.css"
import LanguageProvider from "./components/languageProvider"
import MainComponent from "./components/mainComponent"

function App() {
  return (
    <>
      <LanguageProvider>
        <MainComponent />
      </LanguageProvider>
    </>
  )
}

export default App
