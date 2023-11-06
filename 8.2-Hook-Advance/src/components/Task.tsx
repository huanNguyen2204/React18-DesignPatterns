/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { FC, useEffect, memo } from "react";

interface Props {
  id: number
  task: string
  handleDelete: any
}

const Task: FC<Props> = ({ id, task, handleDelete }) => {
  useEffect(() => {
    console.log("Rendering <Task /> ", task)
  })

  return (
    <li>
      {task}
      <button onClick={() => handleDelete(id)}>X</button>
    </li>
  )
}

export default memo(Task)