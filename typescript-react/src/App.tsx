import React from 'react'
import Greeting from './components/Greeting.tsx'
const App: React.FC = () => {
  return (
    <div className='App'>
        <h1>Greetings </h1>
        <Greeting text='Hello' person={{firstName: 'Afreen',lastName: 'Mohammed!'}}/>
    </div>
  )
}

export default App