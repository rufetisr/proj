import { useState } from 'react'
import Header from './Components/Header/header'
import Form from './Components/Form/form'
import List from './Components/List/list'
import "./App.css"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      <main className='main'>
        <Form />
        <List />
      </main>
    </div>
  )
}

export default App
