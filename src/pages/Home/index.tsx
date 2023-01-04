import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import Navbar from '../../features/navbar'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { Navigate } from 'react-router-dom'

const HomePage = () => {
  const userAuth = useSelector((state: RootState) => state.auth)


  if (!userAuth.token || !userAuth.user) return <Navigate to='/login' replace={true} />


  return (<Container maxWidth="lg">
    <Navbar />
  </Container>
  )
}

export default HomePage 