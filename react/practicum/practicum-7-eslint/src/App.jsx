import "./App.css"
import EventBooking from "./components/eventBooking/"
import EventsProvider from "./components/eventsProvider"

function App() {
  return (
    <EventsProvider>
      <EventBooking />
    </EventsProvider>
  )
}

export default App
