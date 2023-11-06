import './App.css'

import Counter from './components/Counter'
import Issues from './components/Issue'

function App() {
  return (
    <>
      <Counter />
      <Issues 
        propX='kok'
        propY={0}
        propZ={true}
      />
    </>
  )
}

export default App
