import "./App.css"
import Title from "./components/title"

function App() {
  const fruits = ["apple", "banana", "orange", "kiwi"]

  const userData = { name: "Alice", age: 23 }

  function onClick() {
    console.log("Clicked")
  }

  return (
    <div>
      <Title
        titleText={"Profile"}
        specSymbol={"!"}
        userData={userData}
        onClick={onClick}
      />
      {/* <Title titleText={"Contacts"} specSymbol={"$"} />
      <Title titleText={"Price"} specSymbol={"#"} /> */}
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>
        })}
      </ul>
    </div>
  )
}

export default App
