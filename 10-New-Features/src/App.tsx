import './App.css'

import MyComponent from './components/MyComponent'
import TransitionFC from './components/Transition'
import Suspense from './components/Suspense'

function App() {
  return (
    <>
      <MyComponent />
      <TransitionFC />
      <Suspense />
    </>
  )
}

export default App
