import TrainRoute from "../trainRoute"

export default function TrainRoutesList({ routeData }) {
  return (
    <TrainRoute
      startStation={routeData.startStation}
      endStation={routeData.endStation}
      departureTime={routeData.departureTime}
      arrivalTime={routeData.arrivalTime}
      price={routeData.price}
    />
  )
}
