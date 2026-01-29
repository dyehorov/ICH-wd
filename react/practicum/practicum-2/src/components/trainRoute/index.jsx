export default function TrainRoute({
  startStation,
  endStation,
  departureTime,
  arrivalTime,
  price,
}) {
  return (
    <div className="trainRouteCard">
      <h2>
        {startStation}-{endStation}
      </h2>
      <p>
        {departureTime}-{arrivalTime}
      </p>
      <p>Price: {price}</p>
    </div>
  )
}
