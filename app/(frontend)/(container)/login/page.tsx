
import React, { useState } from 'react'
import LoginComp from '../../components/login'
import PageHead from '@/app/head/head'
const Login = () => {
  console.log('LOGIN PAGE ')
  return (
    <div>
      <PageHead title="LOGIN PAGE" description={"LOGIN PAGE DESC"} keywords="next,app,keywords" />
      <LoginComp />
    </div>
  )
}

export default Login