"use client"
import React from 'react'
import { store } from '../../../redux/store/store'
import { darkMode } from '@/app/redux/actions/darkmode/mode';
export default function Login() {
  //  const { payload: mode } =  store.dispatch(darkMode("true")); //errorr
  // const { mode } = store.getState().mode;
  const [count, setCount] = React.useState(0);
  const increase = () => {
    setCount(count + 1)
    console.log('count', count)
  }
  const decrease = () => {
    setCount(count - 1)
    console.log('count', count)
  }
  return (
    <div>Login Components
      count : {count}
      <div>
        <button onClick={() => increase()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Arttir</button>
        <button onClick={() => decrease()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Azalt</button>
      </div>
    </div>
  )
}