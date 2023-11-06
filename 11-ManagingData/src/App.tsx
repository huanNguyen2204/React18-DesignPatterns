import {
  createContext,
} from "react";

import './App.css'

export type Issue = {
  number: number
  title: string
  url: string
  state: string
}

interface Issue_Context {
  issues: Issue[]
  url: string
}

export const IssueContext = createContext<Issue_Context>({ issues: [], url: "" })

function App() {

  return (
    <>
      <></>
    </>
  )
}

export default App
