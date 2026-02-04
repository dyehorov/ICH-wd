import { useState } from "react"

const imageUrls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRIB3cNp_gFwFN4t1buXyKJasmDrgyo1usA&s",
  "https://resizer.mail.ru/p/83d19422-24b8-5029-b6a1-03f6d5ab833d/AQAKicb7PDARmxIZscHVVqgTlI3dy-dd2HlwDvWixW-VbJMEy7OTKzZ4W2Jk-MN_EapFTQCrKL4fnNqcOiQImpB5-B4.jpg",
]

export default function ImageCarousel() {
  const [imageIndex, setImageIndex] = useState(0)

  function handleClick() {
    if (imageIndex >= imageUrls.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(prev => prev + 1)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={imageUrls[imageIndex]}
        alt="html image"
        style={{ width: "300px", height: "300px" }}
      />
      <button
        style={{
          border: "1px solid green",
          borderRadius: "10px",
          height: "70px",
          width: "200px",
        }}
        onClick={handleClick}
      >
        Next image
      </button>
    </div>
  )
}
