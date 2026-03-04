import { useRef, useEffect } from "react"

export default function AutoFocusForm() {
  const inputRef = useRef(null)

  useEffect(() => {
    if (!inputRef.current) return

    inputRef.current.focus()
  }, [])

  return (
    <form>
      <input type="text" ref={inputRef} />
      <button>Submit</button>
    </form>
  )
}
