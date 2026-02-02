import "./App.css"
import Button from "./components/button"
import TeamList from "./components/teamList"

function App() {
  const isAdmin = false

  const containerStyles = {
    backgroundColor: "red",
    border: "20px solid green",
    color: isAdmin ? "yellow" : "blue",
  }

  const teams = [
    {
      name: "Dragons United",
      members: [
        "David Miller",
        "Ethan Turner",
        "Natalie Clark",
        "Sophie Gomez",
        "Tom Hanks",
      ],
    },
    {
      name: "Golden Eagles",
      members: [
        "Lisa Ray",
        "Harry Ford",
        "Betty Cooper",
        "George King",
        "Alice Morgan",
      ],
    },
    {
      name: "Mighty Warriors",
      members: [
        "Sam Wilson",
        "John Norton",
        "Emma Cartright",
        "Daniel Lewis",
        "Megan Stone",
      ],
    },
    {
      name: "Falcon Flyer",
      members: [
        "Oscar Wilde",
        "Robert Brown",
        "Victoria Smith",
        "Rachel Adams",
        "Matthew Johns",
      ],
    },
    {
      name: "Storm Breakers",
      members: [
        "Lucas White",
        "Eva Taylor",
        "Charles Anderson",
        "Emily Johnson",
        "Aaron Carter",
      ],
    },
  ]

  return (
    <div>
      <div style={containerStyles}>
        <h1 style={{ fontSize: "30px" }}>Lorem, ipsum dolor.</h1>
      </div>
      <Button title={"Login"} />
      <TeamList teamsList={teams} />
    </div>
  )
}

export default App
