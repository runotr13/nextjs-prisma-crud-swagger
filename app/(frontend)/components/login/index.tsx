"use client"
import React, { useEffect } from 'react'
import { store } from '../../redux/store/store'
import { darkMode } from '../../redux/actions/darkmode/mode';
import { login } from '../../redux/actions/auth/authReducer';
export default function Login() {
  const { mode } = store.getState().mode;
  const [count, setCount] = React.useState(0);
  const [newMode, setNewMode] = React.useState(mode);
  const increase = () => {
    setCount(count + 1)
    console.log('count', count)
  }
  const decrease = () => {
    setCount(count - 1)
    console.log('count', count)
  }
  const changeMode = () => {
    setNewMode(!newMode)
  }
  useEffect(() => {
    store.dispatch(darkMode(newMode));
  }, [newMode])
  const getLogin = () => {
    const obj = {
      name : 'test',
      surname : 'test'
    }
    store.dispatch(login(obj)).then((res) => {
      console.log('res',res)
    }).catch((err) => {
      console.log('err',err)
    })
  }
  getLogin()
  return (
    <div>Login Components
      count : {count}
      <div>
        <button onClick={() => increase()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Arttir</button>
        <button onClick={() => decrease()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Azalt</button>
      </div>
      <div>
        <button onClick={() => changeMode()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Change Mode</button>
        <p>
          {mode?.toString()}
        </p>
      </div>
    </div>
  )
}