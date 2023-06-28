"use client"
import React, { useState } from 'react'
import LoginComp from '../../components/login'
import PageHead from '@/app/head/head'
const Login = () => {
  const [data, setData] = useState('This is a useState hooks with used in "use strict" mode')
  return (
    <div>
      <PageHead title="LOGIN PAGE" description={"LOGIN PAGE DESC"} keywords="next,app,keywords" />
      {data}
      <LoginComp />
    </div>
  )
}

export default Login