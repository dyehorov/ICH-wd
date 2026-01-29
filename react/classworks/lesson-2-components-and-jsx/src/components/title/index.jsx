// function Title(props) {
//   return (
//     <>
//       <h1>
//         {props.titleText} {props.userData.name} {props.specSymbol}
//       </h1>
//       <button onClick={props.onClick}>Click Me!</button>
//     </>
//   )
// }

// export default Title

function Title({ titleText, userData, specSymbol, onClick }) {
  return (
    <>
      <h1>
        {titleText} {userData.name} {specSymbol}
      </h1>
      <button onClick={onClick}>Click Me!</button>
    </>
  )
}

export default Title
