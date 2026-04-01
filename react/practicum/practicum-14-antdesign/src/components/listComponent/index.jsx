import { Button, List, Input, InputGroup, IconButton, Box } from "rsuite"
import PlusIcon from "@rsuite/icons/Plus"
import "rsuite/dist/rsuite.css"
import { useState } from "react"

export default function ListComponent() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState("")

  const onClick = () => {
    setList(prev => [...prev, inputValue])

    setInputValue("")
  }

  return (
    <Box p={20}>
      <InputGroup mb={20}>
        <Input
          placeholder="Enter new element"
          value={inputValue}
          onChange={setInputValue}
        />
        <InputGroup.Button appearance="primary" onClick={onClick}>
          <PlusIcon />
        </InputGroup.Button>
      </InputGroup>
      <List bordered>
        {list.length === 0 ? (
          <List.Item>No items</List.Item>
        ) : (
          list.map((item, index) => <List.Item key={index}>{item}</List.Item>)
        )}
      </List>
    </Box>
  )
}
