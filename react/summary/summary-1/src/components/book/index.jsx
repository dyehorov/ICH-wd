export default function Book({ title, author, year, isAvailable }) {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#F5F1ED",
        padding: "8px 24px",
        borderRadius: "12px",
      }}
    >
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{year}</p>
      {isAvailable ? "In stock" : "Out of stock"}
    </div>
  )
}
