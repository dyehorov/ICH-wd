import styles from "./styles.module.css"
import SectionTitle from "../sectionTitle"
import Container from "../container"
import LatestJobsList from "../latestJobsList"
import sonyIcon from "../../assets/icons/latestJobListIcons/sony.svg"
import facebookIcon from "../../assets/icons/latestJobListIcons/facebook.svg"
import colaIcon from "../../assets/icons/latestJobListIcons/cola.svg"
import Button from "../button"

const LATEST_JOBS = [
  {
    id: 1,
    category: "Finance",
    categoryColor: "#5182FF",
    title: "Finance Manager at a Large Company",
    location: "Osaka, Japan",
    company: "Sony",
    companyIcon: sonyIcon,
    posted: "3 days ago",
  },
  {
    id: 2,
    category: "Sales",
    categoryColor: "#FF51EE",
    title: "Sales Specialist",
    location: "Kobe, Japan",
    company: "Facebook",
    companyIcon: facebookIcon,
    posted: "7 days ago",
  },
  {
    id: 3,
    category: "Customer Support",
    categoryColor: "#58D94D",
    title: "Call Center Operator",
    location: "Tomamu, Japan",
    company: "Coca-Cola",
    companyIcon: colaIcon,
    posted: "1 day ago",
  },
  {
    id: 4,
    category: "Multimedia",
    categoryColor: "#FF9051",
    title: "System Administrator",
    location: "Tokyo, Japan",
    company: "Sony",
    companyIcon: sonyIcon,
    posted: "3 days ago",
  },
  {
    id: 5,
    category: "Design",
    categoryColor: "#FF9051",
    title: "Interior Designer at a Professional Studio in the City Center",
    location: "Yokohama, Japan",
    company: "Facebook",
    companyIcon: facebookIcon,
    posted: "7 days ago",
  },
  {
    id: 6,
    category: "Logistics",
    categoryColor: "#383838",
    title: "Long-Distance Driver",
    location: "Kobe, Japan",
    company: "Coca-Cola",
    companyIcon: colaIcon,
    posted: "1 day ago",
  },
]

export default function LatestJobs() {
  return (
    <section className={styles.latestJobs}>
      <Container>
        <SectionTitle title={"Latest jobs"} />
        <p className={styles.latestJobsSubtitle}>Find your dream job today</p>
        <LatestJobsList latestJobsList={LATEST_JOBS} />
        <div
          style={{
            display: "flex",
            marginTop: "91px",
            justifyContent: "center",
          }}
        >
          <Button
            title={"All jobs"}
            buttonStyles={{
              padding: "20px 50px",
              backgroundColor: "#274158",
              color: "#fff",
              border: "1px solid #274158",
              fontSize: "20px",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          />
        </div>
      </Container>
    </section>
  )
}
