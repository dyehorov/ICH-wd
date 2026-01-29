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

/*

1.	Родительский компонент App должен определять массив маршрутов поездов и отправлять данные о них в компонент TrainRoutesList.
2.	Дочерний компонент TrainRoutesList должен получать массив маршрутов через props, использовать метод map для отображения каждого маршрута через компонент TrainRoute.
3.	Компонент для отображения маршрута TrainRoute должен получать данные о маршруте через props, отображать информацию о начальной и конечной станциях, времени отправления и прибытия, а также цене билета.
4.	Запустите приложение, проверьте результат
*/
