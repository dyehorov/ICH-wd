import styles from "./styles.module.css"
import facebook from "../../assets/icons/socialsIcons/facebookIcon.svg"
import google from "../../assets/icons/socialsIcons/google.svg"
import linkedin from "../../assets/icons/socialsIcons/linkedIn.svg"
import twitter from "../../assets/icons/socialsIcons/twitter.svg"

const SOCIAL_LIST = [linkedin, google, twitter, facebook]

export default function SocialLinks() {
  return (
    <nav>
      <ul className={styles.socialList}>
        {SOCIAL_LIST.map((social, index) => (
          <li key={index} className={styles.socialListItem}>
            <a href="#">
              <img src={social} alt="social icon" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
