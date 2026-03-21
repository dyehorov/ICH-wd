import { useEffect, useRef } from "react"

export default function ValueDisplay({ value }) {
  const previousValue = useRef("")

  useEffect(() => {
    previousValue.current = value
  }, [value])

  return (
    <div className="value-display">
      <p>Current value: {value || "none"}</p>
      <p>Previous value: {previousValue.current || "none"}</p>
    </div>
  )
}
