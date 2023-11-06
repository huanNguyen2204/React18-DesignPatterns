import { FC, ReactNode } from "react"
import './App.css'

type Props = {
  children: ReactNode
}

const App: FC<Props> = ({ children }) => {

  return (
    <div className="">
      {children}
    </div>
  )
}

export default App
