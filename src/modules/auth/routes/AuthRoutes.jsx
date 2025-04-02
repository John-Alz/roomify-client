import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'
import { SignUpForm } from '../components/SignUpForm'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/sign-up' element={<SignUpForm />} />
      <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}