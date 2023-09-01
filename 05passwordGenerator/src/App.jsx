
import { useState, useCallback } from 'react'


function App() {
    const[length,setLength] = useState(8)
    const[numberAllowed, setNumberAllowed] = useState(false);
    const[charAllowed,setCharAllowed] = useState(false)
    const[password,setPassword] = useState("")

    const passwordGenerator = useCallback(()=>{
      let pass = ""
      let str = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z"
      if(numberAllowed)str += "0123456789"
      if(charAllowed)str += "!@#$%^&*_-[]{}~`"

      for(let i =1; i<=Array.length; i++){
        let char = Math.floor(Math.random()*str.length+1)

        pass  = str.charAt(char) 

      }

      setPassword(pass)

    }, [length,numberAllowed,charAllowed,setPassword])
  return (
    <>
    <div className='w-full max-md mx-auto shadow-sm rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>Password generator</h1>
        <div className='flex shadow rounded-lg 
        overflow-hidden mb-4'>
              <input type="text" 
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              />
        </div>
    </div>
    </>
  )
}

export default App
