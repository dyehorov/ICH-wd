const cookieBanner = document.querySelector(".cookie-banner")
const acceptCookie = document.querySelector(".accept")
const rejectCookie = document.querySelector(".reject")

acceptCookie.addEventListener("click", () => {
  cookieBanner.style.display = "none"
})

rejectCookie.addEventListener("click", () => {
  cookieBanner.style.display = "none"
})

const faqList = document.querySelector(".faq-list")

function createFaqListItem(question, answer, data) {
  const listItem = document.createElement("li")
  listItem.classList.add("faq-list__item")
  listItem.setAttribute("data-item", data)

  const titleAndButtonContainer = document.createElement("div")
  titleAndButtonContainer.classList.add("faq-title-and-button")

  const title = document.createElement("h3")
  titleAndButtonContainer.classList.add("faq-item-title")

  const button = document.createElement("div")
  button.classList.add("faq-button-down", "faq-button")

  button.addEventListener("click", (event) => {
    const listElement = event.target.closest(".faq-list__item")
    const dataOfOpenedElement = listElement.dataset.item

    document.querySelectorAll(".faq-list__item").forEach((item) => {
      if (item.dataset.item !== dataOfOpenedElement) {
        item.classList.remove("faq-list__item--expanded")
        item.querySelector(".faq-button").classList.remove("faq-button-up")
      }
    })

    listElement.classList.toggle("faq-list__item--expanded")
    event.target.classList.toggle("faq-button-up")
  })

  const text = document.createElement("p")
  text.classList.add("faq-item-text")

  titleAndButtonContainer.append(title, button)
  listItem.append(titleAndButtonContainer, text)

  title.textContent = question
  text.textContent = answer

  faqList.appendChild(listItem)
}

const faqPairs = [
  {
    question: "Who is this for?",
    answer:
      "HOTSAUCE is for anyone working in marketing, product, UX design, and ecommerce but if you own a website or product you want to improve, you’ll also find it useful. The aim is to inspire you by giving you the tools you need to empathize with your audience and improve your digital experience.",
    data: 1,
  },
  {
    question: "Is the venue accessible?",
    answer:
      "HOTSAUCE is for anyone working in marketing, product, UX design, and ecommerce but if you own a website or product you want to improve, you’ll also find it useful. The aim is to inspire you by giving you the tools you need to empathize with your audience and improve your digital experience.",
    data: 2,
  },
  {
    question: "How sustainable are events at Javits Center?",
    answer:
      "HOTSAUCE is for anyone working in marketing, product, UX design, and ecommerce but if you own a website or product you want to improve, you’ll also find it useful. The aim is to inspire you by giving you the tools you need to empathize with your audience and improve your digital experience.",
    data: 3,
  },
  {
    question: "What’s included in the ticket price?",
    answer:
      "HOTSAUCE is for anyone working in marketing, product, UX design, and ecommerce but if you own a website or product you want to improve, you’ll also find it useful. The aim is to inspire you by giving you the tools you need to empathize with your audience and improve your digital experience.",
    data: 4,
  },
  {
    question: "What’s the dress code?",
    answer:
      "HOTSAUCE is for anyone working in marketing, product, UX design, and ecommerce but if you own a website or product you want to improve, you’ll also find it useful. The aim is to inspire you by giving you the tools you need to empathize with your audience and improve your digital experience.",
    data: 5,
  },
  {
    question: "Where can I stay?",
    answer:
      "HOTSAUCE is for anyone working in marketing, product, UX design, and ecommerce but if you own a website or product you want to improve, you’ll also find it useful. The aim is to inspire you by giving you the tools you need to empathize with your audience and improve your digital experience.",
    data: 6,
  },
  {
    question: "I’ve bought a ticket but can no longer attend, what do I do?",
    answer:
      "HOTSAUCE is for anyone working in marketing, product, UX design, and ecommerce but if you own a website or product you want to improve, you’ll also find it useful. The aim is to inspire you by giving you the tools you need to empathize with your audience and improve your digital experience.",
    data: 7,
  },
]

window.addEventListener("DOMContentLoaded", () => {
  faqPairs.forEach(({ question, answer, data }) =>
    createFaqListItem(question, answer, data)
  )
})
