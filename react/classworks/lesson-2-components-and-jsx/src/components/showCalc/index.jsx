import { multiply } from "../../utils/usefulFunctions"

function ShowCalc() {
  console.log(multiply(2, 5))

  return (
    <div>
      <h2>This is show calc component</h2>
      <p>{multiply(3, 5) + multiply(2, 6)}</p>
    </div>
  )
}

export default ShowCalc
