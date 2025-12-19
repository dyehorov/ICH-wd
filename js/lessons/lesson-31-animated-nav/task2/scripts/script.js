const form = document.querySelector(".form")
const orderButtonsContainer = document.querySelector(".orderButtons")
const notificationContainer = document.querySelector(".notifications")
const notifications = []

const notificationData = [
  {
    title: "Order Paid",
    text: "Awaiting shipment",
    type: "paid",
  },
  {
    title: "Order Shipped",
    text: "Please wait for the courier",
    type: "shipped",
  },
  {
    title: "Order Received",
    text: "We look forward to seeing you again!",
    type: "received",
  },
  {
    title: "Order Created",
    text: "Please wait for further information",
    type: "created",
  },
  {
    title: "Order Delayed",
    text: "Your order is taking longer than expected",
    type: "delayed",
  },
  {
    title: "Order Canceled",
    text: "The order has been canceled",
    type: "canceled",
  },
]

const orderButtonsList = [
  { title: "Order paid", type: "paid" },
  { title: "Order shipped", type: "shipped" },
  { title: "Order received", type: "received" },
  { title: "Order delayed", type: "delayed" },
  { title: "Order canceled", type: "canceled" },
]

const notificationIcons = {
  created: "fa-solid fa-check",
  paid: "fa-solid fa-money-bills",
  shipped: "fa-solid fa-truck",
  received: "fa-solid fa-file-invoice",
}

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
    renderOrderButtons(orderButtonsList)
  }, 500)
})

orderButtonsContainer.addEventListener("click", event => {
  if (!event.target.closest(".button")) return

  const buttonClicked = event.target.id

  const notification = notificationData.find(
    item => item.type === buttonClicked
  )

  notifications.unshift(
    new Notification(notification.title, notification.text, notification.type)
  )

  renderNotifications(notifications[0])
})

function removeNotificationFromList(id) {
  const index = notifications.findIndex(item => item.id === id)
  if (index === -1) return false

  notifications.splice(index, 1)

  return true
}

function createNotification({ id, type, title, text }) {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.dataset.id = id

  notification.innerHTML = `
    <div class="notification-icon">
      <i class="fa-solid ${notificationIcons[type] ?? "fa-info"}"></i>
    </div>

    <div class="notification-content">
      <p class="notification-title">${title}</p>
      <p class="notification-text">${text}</p>
    </div>

    <div class="notification-closeButton">
      <i class="fa-solid fa-xmark"></i>
    </div>
  `

  notification
    .querySelector(".notification-closeButton")
    .addEventListener("click", () => {
      notification.classList.remove("notification-show")

      notification.addEventListener(
        "transitionend",
        () => {
          const id = Number(notification.dataset.id)

          if (removeNotificationFromList(id)) {
            notification.remove()
          }
        },
        { once: true }
      )
    })

  return notification
}

function createOrderButtons(title, type) {
  const btn = document.createElement("button")
  btn.classList.add("button")
  btn.textContent = title
  btn.id = type

  return btn
}

function renderOrderButtons(buttonList) {
  buttonList.forEach(item =>
    orderButtonsContainer.appendChild(createOrderButtons(item.title, item.type))
  )
}

function renderNotifications(notification) {
  const element = createNotification(notification)
  notificationContainer.prepend(element)

  requestAnimationFrame(() => {
    element.classList.add("notification-show")
  })
}
