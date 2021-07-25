import React from 'react'

import { ToDos } from './features/toDos/ToDos'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function App() {
  return (
    <div className="App">
      <ToDos />
      <Sidebar />
    </div>
  )
}

export default App
