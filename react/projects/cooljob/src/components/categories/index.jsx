import styles from "./styles.module.css"
import SectionTitle from "../sectionTitle"
import Container from "../container"
import finances from "../../assets/icons/categoriesIcons/finances.svg"
import logistics from "../../assets/icons/categoriesIcons/logistics.svg"
import design from "../../assets/icons/categoriesIcons/design.svg"
import restaurant from "../../assets/icons/categoriesIcons/restaurant.svg"
import healthcare from "../../assets/icons/categoriesIcons/healthcare.svg"
import multimedia from "../../assets/icons/categoriesIcons/multimedia.svg"
import support from "../../assets/icons/categoriesIcons/support.svg"
import management from "../../assets/icons/categoriesIcons/management.svg"
import sales from "../../assets/icons/categoriesIcons/sales.svg"
import more from "../../assets/icons/categoriesIcons/more.svg"
import CategoriesList from "../categoriesList"

const CATEGORIES = [
  {
    id: "finance",
    label: "Finance",
    icon: finances,
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: logistics,
  },
  {
    id: "design",
    label: "Design",
    icon: design,
  },
  {
    id: "restaurant",
    label: "Food & Beverage",
    icon: restaurant,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: healthcare,
  },
  {
    id: "multimedia",
    label: "Multimedia",
    icon: multimedia,
  },
  {
    id: "support",
    label: "Customer Support",
    icon: support,
  },
  {
    id: "management",
    label: "Management",
    icon: management,
  },
  {
    id: "sales",
    label: "Sales",
    icon: sales,
  },
  {
    id: "more",
    label: "More Categories",
    icon: more,
  },
]

export default function Categories() {
  return (
    <section className={styles.categories}>
      <Container>
        <SectionTitle title={"Jobs by Category"} />
        <CategoriesList categories={CATEGORIES} />
      </Container>
    </section>
  )
}
