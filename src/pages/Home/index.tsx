import React from 'react'
import { Container } from '@mui/material'
import Navbar from '../../features/navbar'
import { RootState } from '../../state/store'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'

const HomePage = () => {
  const navigate = useNavigate()
  const { token, user } = useAppSelector((state: RootState) => state.auth)
  React.useEffect(() => {
    if (!token || !user) navigate('/login')
  }, [token, user, navigate])

  return (<Container maxWidth="lg">
    <Navbar />
  </Container>
  )
}

export default HomePage 