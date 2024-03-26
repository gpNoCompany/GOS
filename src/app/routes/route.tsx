import { createBrowserRouter } from 'react-router-dom'
import { ResetPasswordForm } from '../../pages/reset-password/ui'
import { SignInForm } from '../../pages/sign-in/ui'
import { SignUpForm } from '../../pages/sign-up/ui'
import { App } from '../App'
import { ErrorPage } from '@pages/error/ui'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'sign-in',
    element: <SignInForm />,
  },
  {
    path: 'sign-up',
    element: <SignUpForm />,
  },
  {
    path: 'reset-password',
    element: <ResetPasswordForm />,
  },
])
