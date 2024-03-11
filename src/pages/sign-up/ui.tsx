import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../../shared/input'
import { FormFields } from '../../shared/types'
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
    <div className="flex justify-around flex-col  h-screen items-center  bg-light-black">
      <form onSubmit={handleSubmit(onSubmit)} className="w-80">
        <fieldset className="flex flex-col gap-5 text-white mb-5">
          <legend className="text-center text-2xl font-black mb-5">
            Log in to [name]
          </legend>
          <Input register={register} name="login" placeholder="Login" />
          {errors.login && <div>{errors.login.message}</div>}
          <Input register={register} name="email" placeholder="Email" />
          {errors.email && <div>{errors.email.message}</div>}
          <Input
            register={register}
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && <div>{errors.password.message}</div>}
          <a href="#" className="text-light-gray text-right">
            Forgot your password?
          </a>
          <button className="transition-all hover:opacity-80 bg-btn-bg-green text-black h-11 rounded-lg text-xs font-semibold">
            Log in
          </button>
        </fieldset>
        <div className="mb-5 flex items-center relative before:flex-1 before:border-light-gray before:border  after:flex-1 after:border-light-gray after:border  before:left-0 after:right-0">
          <div className="text-light-gray mx-5">or continue with</div>
        </div>
        <SocialsAccReg />
      </form>
      <p className="text-light-gray">
        By signing up, you agree to our Terms, Data Policy and Cookies Policy.
      </p>
    </div>
  )
}