"use client"
import React, { useEffect } from 'react'
import { store } from '../../redux/store/store'
import { darkMode } from '../../redux/actions/darkmode/mode';
import { login } from '../../redux/actions/auth/authReducer';
import { signIn, signOut, useSession } from "next-auth/react"
export default function Login() {
  const { mode } = store.getState().mode;
  const [count, setCount] = React.useState(0);
  const [newMode, setNewMode] = React.useState(mode);
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const changeMode = () => {
    setNewMode(!newMode)
  }
  console.log("session",session);
  useEffect(() => {
    store.dispatch(darkMode(newMode));
  }, [newMode])
  const getLogin = () => {
    const obj = {
      name: 'test',
      surname: 'test'
    }
    store.dispatch(login(obj)).then((res) => {
      console.log('res', res)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  getLogin()
  return (
    <div>Login Components
      count : {count}
      <div>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign in</button>
          </>
        )}
        {session && (
          <>
            {/* Signed in as {session.user.email} <br /> */}
            <button onClick={() => signOut()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign out</button>
          </>
        )}
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