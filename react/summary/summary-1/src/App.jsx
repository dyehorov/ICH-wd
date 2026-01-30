import "./App.css"
import Form from "./components/form"
import User from "./components/user"
import FlexBox from "./components/flexBox"
import Menu from "./components/menu"
import BookShelf from "./components/bookShelf"
import UserProfile from "./components/userProfile"

function App() {
  const menu = [
    {
      id: 1,
      name: "Garlic Bread",
      description: "Classic garlic bread, with a hint of herbs.",
      price: 5,
    },
    {
      id: 2,
      name: "Soup of the Day",
      description: "A delicious way to start your meal.",
      price: 7,
    },
    {
      id: 3,
      name: "Grilled Salmon",
      description: "Fresh salmon that's grilled to perfection.",
      price: 15,
    },
    {
      id: 4,
      name: "Steak",
      description: "High-quality beef with our special sauce.",
      price: 18,
    },
    {
      id: 5,
      name: "Cheesecake",
      description: "Creamy cheesecake with a crispy base.",
      price: 6,
    },
    {
      id: 6,
      name: "Ice Cream",
      description: "Choose from our variety of flavors.",
      price: 4,
    },
  ]

  const books = [
    {
      id: 1,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
      isAvailable: true,
    },
    {
      id: 2,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2011,
      isAvailable: false,
    },
    {
      id: 3,
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      year: 2015,
      isAvailable: true,
    },
    {
      id: 4,
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      isAvailable: true,
    },
    {
      id: 5,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      year: 1999,
      isAvailable: false,
    },
  ]

  const availableBooks = [
    {
      id: 1,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
      isAvailable: true,
    },
    {
      id: 3,
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      year: 2015,
      isAvailable: true,
    },
    {
      id: 4,
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      isAvailable: true,
    },
  ]

  const borrowedBooks = [
    {
      id: 2,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2011,
      isAvailable: false,
    },

    {
      id: 5,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      year: 1999,
      isAvailable: false,
    },
  ]

  const user = {
    name: "Anna Smirnova",
    bio: "Frontend-developer, interested in React and modern JS.",
    contacts: {
      email: "anna@example.com",
      phone: "346564786580",
      website: "https://portfolio.annasmirnova.com",
    },
    skills: ["HTML/CSS", "JavaScript", "React", "Figma"],
    isLookingForJob: true,
  }

  return (
    <>
      <Form formTitle={"Register"} titleColor="red" />
      <Form formTitle={"Login"} titleColor="blue" />
      <User name={"Max"} />
      <FlexBox>
        <p>Lorem1</p>
        <p>Lorem2</p>
        <p>Lorem3</p>
        <p>Lorem4</p>
        <p>Lorem5</p>
      </FlexBox>
      <Menu menuList={menu} />
      <BookShelf bookList={books} />
      <BookShelf bookList={availableBooks} title={"Available Books"} />
      <BookShelf bookList={borrowedBooks} title={"Borrowed books"} />
      <UserProfile userInfo={user} />
    </>
  )
}

export default App
