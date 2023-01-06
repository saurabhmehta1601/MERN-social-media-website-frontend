import React from 'react'
import Navbar from '../../features/Navbar'
import { RootState } from '../../state/store'
import {  useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import Feed from '../../features/Feed'

const HomePage = () => {
  const navigate = useNavigate()
  const { token, user } = useAppSelector((state: RootState) => state.auth)
  React.useEffect(() => {
    if (!token || !user) navigate('/login')
  }, [token, user, navigate])

  return (<>
    <Navbar />
    <Feed />
  </>
  )
}

export default HomePage 