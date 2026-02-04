import NoteItem from "../noteItem"

export default function NoteList({ notes }) {
  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} {...note} />
      ))}
    </ul>
  )
}
