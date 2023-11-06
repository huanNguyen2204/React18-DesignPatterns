import { FC, useState } from "react"

const List: FC = () => {
  const [items, setItems] = useState(["foo", "bar"]);

  const handleClick = () => {
    const newItems = items.slice()
    newItems.unshift("bar")
    setItems(newItems)
  }

  return(
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default List