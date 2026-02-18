import "./App.css"
import Logo from "./components/logo"
import Container from "./components/container"
import SocialList from "./components/socialList"
import Slogan from "./components/slogan"

function App() {
  return (
    <div className="appContainer">
      <Logo />
      <Container>
        <Slogan />
        <span>
          Sign in <br />
          with
        </span>
        <SocialList />
      </Container>
    </div>
  )
}

export default App
