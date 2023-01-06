import React from 'react'
import { Container } from '@mui/material'
import Navbar from '../../features/navbar'
import { RootState } from '../../state/store'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'

const HomePage = () => {
  const { token, user } = useAppSelector((state: RootState) => state.auth)
  if (!token || !user) return (<Navigate to="/login" />)



  return (<Container maxWidth="lg">
    <Navbar />
  </Container>
  )
}

export default HomePage 