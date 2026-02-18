import styles from "./styles.module.css"
import Social from "../social"
import apple from "../../assets/apple.svg"
import appleHover from "../../assets/apple-hover.svg"
import google from "../../assets/google.svg"
import googleHover from "../../assets/google-hover.svg"
import x from "../../assets/x.svg"
import xHover from "../../assets/x-hover.svg"

const socials = [
  { defaultIcon: apple, hoverIcon: appleHover, label: "Apple" },
  { defaultIcon: google, hoverIcon: googleHover, label: "Google" },
  { defaultIcon: x, hoverIcon: xHover, label: "X" },
]

export default function SocialList() {
  return (
    <ul className={styles.socialList}>
      {socials.map((social) => (
        <li key={social.label}>
          <Social
            defaultIcon={social.defaultIcon}
            hoverIcon={social.hoverIcon}
            label={social.label}
          />
        </li>
      ))}
    </ul>
  )
}
