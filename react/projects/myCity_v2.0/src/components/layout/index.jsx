import { NavLink, Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">🏙️ My city</h1>
          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/districts"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Districts
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 My city. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
