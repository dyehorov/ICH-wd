import { useState, useRef } from "react"
import styles from "./styles.module.css"

export default function ScrollBox() {
  const boxRef = useRef(null)
  const [showTopButton, setShowTopButton] = useState(false)

  const scrollToTop = () => {
    if (boxRef.current) {
      boxRef.current.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  const handleScroll = () => {
    const box = boxRef.current
    if (!box) return
    setShowTopButton(box.scrollTop > 10)
  }

  return (
    <div>
      <div
        ref={boxRef}
        onScroll={handleScroll}
        style={{
          height: "100vh",
          overflowY: "scroll",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          repudiandae similique totam repellendus eos tempore. Modi, possimus
          accusantium eius iusto voluptatem maiores neque cumque, molestiae
          pariatur saepe voluptates in quas laborum tenetur laboriosam atque
          nulla, a facere nesciunt adipisci omnis iure fugiat? Assumenda illo
          fuga maiores eaque nesciunt accusantium ratione!
        </p>
      </div>
      {showTopButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            left: "50px",
            padding: "20px",
            backgroundColor: "cadetblue",
            cursor: "pointer",
          }}
        >
          Scroll to Top
        </button>
      )}
    </div>
  )
}
