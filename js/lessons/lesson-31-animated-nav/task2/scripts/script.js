/*
{
    id: "",
    title: "",
    content: "",
    icon: "",
    type: "",
   }
*/

const form = document.querySelector(".form")
const orderButtons = document.querySelector(".orderButtons")
const notificationContainer = document.querySelector(".notifications")
const notifications = []

class Notification {
  constructor(title, text, type) {
    this.id = Math.floor(Math.random() * 1_000_000)
    this.title = title
    this.text = text
    this.type = type
  }
}

form.addEventListener("submit", event => {
  event.preventDefault()

  notifications.unshift(
    new Notification(
      "Order created",
      "Please wait for further information",
      "created"
    )
  )

  setTimeout(() => {
    renderNotifications(notifications[0])
    orderButtons.classList.remove("hidden")
  }, 500)

  console.log(notifications)
})

orderButtons.addEventListener("click", event => {
  if (!event.target.closest(".button")) return

  const buttonClicked = event.target.dataset.status

  switch (buttonClicked) {
    case "paid":
      notifications.unshift(
        new Notification("Order paid", "Awaiting shipment", `${buttonClicked}`)
      )

      break
    case "shipped":
      notifications.unshift(
        new Notification(
          "Order shipped",
          "Please wait for the courier",
          `${buttonClicked}`
        )
      )

      break
    case "received":
      notifications.unshift(
        new Notification(
          "Order received",
          "We look forward to seeing you again!",
          `${buttonClicked}`
        )
      )

      break
  }

  renderNotifications(notifications[0])
})

function createNotification(notification) {
  const notificationContainer = document.createElement("div")
  notificationContainer.classList.add("notification", `${notification.type}`)

  const iconContainer = document.createElement("div")
  iconContainer.classList.add("notification-icon")

  const iconSpan = document.createElement("span")
  const icon = document.createElement("i")

  const icons = {
    created: "fa-solid fa-check",
    paid: "fa-solid fa-money-bills",
    shipped: "fa-solid fa-truck",
    received: "fa-solid fa-file-invoice",
  }

  icon.className = icons[`${notification.type}`]

  iconSpan.append(icon)
  iconContainer.append(iconSpan)

  const content = document.createElement("div")
  content.classList.add("notification-content")

  const titleEl = document.createElement("p")
  titleEl.classList.add("notification-title")
  titleEl.textContent = notification.title

  const textEl = document.createElement("p")
  textEl.classList.add("notification-text")
  textEl.textContent = notification.text

  content.append(titleEl, textEl)

  const closeContainer = document.createElement("div")
  closeContainer.classList.add("notification-closeButton")

  const closeSpan = document.createElement("span")
  const closeIcon = document.createElement("i")
  closeIcon.classList.add("fa-solid", "fa-xmark")

  closeSpan.append(closeIcon)
  closeContainer.append(closeSpan)

  closeContainer.addEventListener("click", () => {
    notificationContainer.classList.remove("notification-show")

    setTimeout(() => {
      notificationContainer.remove()
    }, 400)
  })

  notificationContainer.append(iconContainer, content, closeContainer)

  return notificationContainer
}

function renderNotifications(notification) {
  const element = createNotification(notification)
  notificationContainer.prepend(element)

  requestAnimationFrame(() => {
    element.classList.add("notification-show")
  })
}

function removeNotificationFromList(id) {
  noti
}
