import MenuItem from "../menuItem"

export default function Menu({ menuList }) {
  return (
    <ul>
      {menuList.map(menuItem => (
        <MenuItem
          key={menuItem.id}
          name={menuItem.name}
          description={menuItem.description}
          price={menuItem.price}
        />
      ))}
    </ul>
  )
}
