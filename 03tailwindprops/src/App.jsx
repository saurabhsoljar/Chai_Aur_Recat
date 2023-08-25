
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind test</h1>
      <Card username="saurabh" btnText="click me"/>
      <Card username="kumar" btnText="visit me"/>
    </>
  )
}

export default App
