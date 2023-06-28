import React from 'react'
import RegisterComp from '../../components/register'
import PageHead from '@/app/head/head'
const Register = () => {
  return (
    <div>
        <PageHead title="REGISTER PAGE" description={"REGISTER PAGE DESC"} keywords="next,app,keywords" />
      <RegisterComp />
    </div>
  )
}

export default Register