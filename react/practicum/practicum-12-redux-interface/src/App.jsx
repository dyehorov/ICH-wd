import "./App.css"
import LoginForm from "./components/loginForm"
import UserProfile from "./components/userProfile"
import { connect } from "react-redux"

function App({ isAuthenticated }) {
  return (
    <>
      <h1>Authentication App</h1>
      {isAuthenticated ? <UserProfile /> : <LoginForm />}
    </>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
  }
}

export default connect(mapStateToProps)(App)
