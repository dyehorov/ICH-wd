export default function EventComponent() {
  return (
    <div>
      <h1 onClick={() => console.log("Click")}>Click</h1>
      <h2 onDoubleClick={() => console.log("Double click")}>Double Click</h2>
      <h3
        onMouseDown={() => console.log("Mouse down")}
        onMouseUp={() => console.log("Mouse up")}
      >
        Mouse down
      </h3>
      <h4
        onMouseOver={() => console.log("Mouse over")}
        onMouseOut={() => console.log("Mouse out")}
      >
        Mouse over
      </h4>
      <h5 onMouseMove={() => console.log("Mouse move")}>Mouse move</h5>
    </div>
  )
}
