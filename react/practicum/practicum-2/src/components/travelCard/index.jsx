import DestinationImage from "../destinationImage"
import DestinationInfo from "../destinationInfo"
import DestinationStats from "../destinationStats"

function TravelCard({ travelData }) {
  return (
    <div style={{ border: "2px solid green", marginBottom: "20px" }}>
      <DestinationImage imageUrl={travelData.imageUrl} name={travelData.name} />
      <DestinationInfo
        name={travelData.name}
        description={travelData.description}
      />
      <DestinationStats stats={travelData.stats} />
    </div>
  )
}

export default TravelCard
