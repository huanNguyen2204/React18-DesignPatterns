import { FC, useState } from "react";

type Props = {
  count: number
}

const Counter: FC<Props> = (props) => {
  const [state, setState] = useState<Props>(props)

  const handleClick = () => {
    setState({
      count: state.count + 1
    })
  }

  return (
    <div>
      {state.count}
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter