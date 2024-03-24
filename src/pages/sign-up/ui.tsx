import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../../shared/input'
import { FormFields } from '../../shared/types/types'
import { SocialsAccReg } from '../../widgets/socials-reg'
import { onSubmit, schema } from './lib'

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  return (
    <div className="flex flex-col items-center justify-around h-screen bg-light-black">
      <form onSubmit={handleSubmit(onSubmit)} className="w-80">
        <fieldset className="flex flex-col gap-5 mb-5 text-white">
          <legend className="mb-5 text-2xl font-black text-center">
            Log in to [name]
          </legend>
          <Input register={register} name="login" placeholder="Login" />
          {errors.login && (
            <div className="text-red">{errors.login.message}</div>
          )}
          <Input register={register} name="email" placeholder="Email" />
          {errors.email && (
            <div className="text-red">{errors.email.message}</div>
          )}
          <Input
            register={register}
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <div className="text-red">{errors.password.message}</div>
          )}
          <a href="#" className="text-right text-light-gray">
            Forgot your password?
          </a>
          <button className="text-xs font-semibold text-black transition-all rounded-lg hover:opacity-80 bg-green h-11">
            Log in
          </button>
        </fieldset>
        <div className="relative flex items-center mb-5 before:flex-1 before:border-light-gray before:border after:flex-1 after:border-light-gray after:border before:left-0 after:right-0">
          <div className="mx-5 text-light-gray">or continue with</div>
        </div>
        <SocialsAccReg />
      </form>
      <p className="text-light-gray">
        By signing up, you agree to our Terms, Data Policy and Cookies Policy.
      </p>
    </div>
  )
}
