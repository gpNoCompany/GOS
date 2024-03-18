import { createBrowserRouter } from 'react-router-dom'
import { SignInForm } from '../../pages/sign-in/ui'
import { SignUpForm } from '../../pages/sign-up/ui'
import { App } from '../App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'sign-in',
    element: <SignInForm />,
  },
  {
    path: 'sign-up',
    element: <SignUpForm />,
  },
])
