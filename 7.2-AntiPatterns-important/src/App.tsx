import './App.css'

import Counter from './components/Counter'
import List from './components/List'

function App() {

  return (
    <>
      <Counter 
        count={1}
      />

      <List />
    </>
  )
}

export default App
