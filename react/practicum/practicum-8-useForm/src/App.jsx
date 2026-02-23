import "./App.css"
import UserProvider from "./components/userProvider"
import MainComponent from "./components/mainComponent"

export default function App() {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  )
}
