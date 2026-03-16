import Nav from "../../components/nav"
import BasicPie from "../../components/statisticChart"

export default function Main() {
  return (
    <section className="appHero">
      <p className="appEyebrow">Personal Library</p>
      <h1>Welcome to Bookstore Dashboard</h1>
      <Nav />
      <BasicPie />
    </section>
  )
}
