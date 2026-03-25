import styles from "./styles.module.css"
import Container from "../../components/container"
import ContactsForm from "../../components/contactsForm"

import snapchatIcon from "../../assets/icons/snapchatIcon.svg"
import facebookIcon from "../../assets/icons/facebookIcon.svg"
import twitterIcon from "../../assets/icons/xIcon.svg"

export default function ContactsPage() {
  return (
    <div className={styles.contactsPageContent}>
      <Container>
        <h2 className={styles.pageTitle}>Contacts</h2>
        <div className={styles.line}></div>

        <div className={styles.content}>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>8 800 000 00 00</li>
            <li className={styles.contactItem}>email@example@gmail.com</li>
          </ul>

          <div className={styles.formWrapper}>
            <ContactsForm />
            <div className={styles.socialBox}>
              <p className={styles.socialTitle}>Find us here:</p>

              <div className={styles.socialList}>
                <a href="#" className={styles.socialLink} aria-label="Snapchat">
                  <img src={snapchatIcon} alt="Snapchat" />
                </a>

                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <img src={facebookIcon} alt="Facebook" />
                </a>

                <a href="#" className={styles.socialLink} aria-label="X">
                  <img src={twitterIcon} alt="X" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
