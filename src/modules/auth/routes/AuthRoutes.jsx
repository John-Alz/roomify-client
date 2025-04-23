import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'
import { SignUpForm } from '../components/SignUpForm'
import FormEmailRecovery from '../components/FormEmailRecovery';
import FormPasswordRecovery from '../components/FormPasswordRecovery';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/sign-up' element={<SignUpForm />} />
      <Route path='/form-recovery' element={ <FormEmailRecovery/>} />
      <Route path='/password-recovery' element={ <FormPasswordRecovery/>} />
      <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}