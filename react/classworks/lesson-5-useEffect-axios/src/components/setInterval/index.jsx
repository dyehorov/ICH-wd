import { useState, useEffect } from "react"

export default function SetInterval() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    return () => {
      console.log("Unmount")
    }
  }, [])

  // useEffect(() => {
  //   const timeId = setInterval(() => {
  //     setSeconds(prev => prev + 1)
  //   }, 1000)

  //   return () => {
  //     clearInterval(timeId)
  //     console.log("setInteval was stopped and removed")
  //   }
  // }, [])

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}
