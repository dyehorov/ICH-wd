import "./App.css"
import ListComponent from "./components/listComponent"
import TasksComponent from "./components/tasksComponent/indes"

// import { Button, Modal } from "antd"
// import { useState } from "react"

// export default function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const showModal = () => {
//     setIsModalOpen(true)
//   }

//   const handleOk = () => {
//     setIsModalOpen(false)
//   }

//   const handleCancel = () => {
//     setIsModalOpen(false)
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <Button onClick={showModal}>Open modal</Button>
//       <Modal
//         title="Simple modal window"
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         mask={{ blur: true }}
//       >
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
//           blanditiis molestiae nisi suscipit, fugit deleniti amet debitis!
//         </p>
//       </Modal>
//     </div>
//   )
// }

export default function App() {
  return (
    <>
      <ListComponent />
      <TasksComponent />
    </>
  )
}
