"use client"
import React, { useState } from 'react'
import LoginComp from '../../(components)/login'
const Login = () => {
  const [data,setData] = useState('This is a useState hooks with used in "use strict" mode')
  return (
    <div>
      {data}
      <LoginComp/>
    </div>
  )
}

export default Login