export default function Form({ titleColor, formTitle }) {
  return (
    <form>
      <h1 style={{ color: titleColor }}>{formTitle}</h1>
      <hr />
    </form>
  )
}
