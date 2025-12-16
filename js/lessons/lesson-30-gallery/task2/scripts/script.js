const data = [
  {
    id: 1,
    title: "10 компании",
    text: `11001010010101010100101ipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.`,
  },
  {
    id: 2,
    title: "20 компании",
    text: "2L200000000000000000000022002r adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
  {
    id: 3,
    title: "30 компании",
    text: "3Lo3030303030300303030ctetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
  {
    id: 4,
    title: "40 компании",
    text: "4Lo404040040404040040404040ur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
  {
    id: 5,
    title: "50 компании",
    text: "5L500505050500505050050isicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
  {
    id: 6,
    title: "60 компании",
    text: "660060060060600000060606006isicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  },
]

const root = document.querySelector("#root")
const listOfCompanies = document.createElement("ul")
listOfCompanies.className = "listOfCompanies container"

const companiesDescription = document.createElement("div")
companiesDescription.className = "companiesDescription container"
companiesDescription.textContent = data[0].text

root.append(listOfCompanies, companiesDescription)

data.forEach(item => {
  listOfCompanies.appendChild(createListItemForNavigation(item.title, item.id))
})

function createListItemForNavigation(title, id) {
  const listItem = document.createElement("li")
  listItem.id = id
  listItem.className = id === 1 ? "listItem active" : "listItem"
  listItem.textContent = title

  return listItem
}

listOfCompanies.addEventListener("click", event => {
  if (!event.target.closest(".listItem")) return

  const listItems = document.querySelectorAll(".listOfCompanies > li")
  listItems.forEach(item => item.classList.remove("active"))

  event.target.classList.add("active")

  const companyInfo = data.find(item => item.id === +event.target.id)
  companiesDescription.textContent = companyInfo.text
})
