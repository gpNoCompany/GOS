import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../../shared/input'
import { FormFields } from '../../shared/types/types'
import { onSubmit, schema } from './lib'
import EXIT_ICON from '../../assets/icons/exit_icon.png'
export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  return (
    <div className="flex justify-around flex-col  h-screen items-center  bg-light-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 bg-dark py-3 px-6 rounded-2xl border-2 border-gray2"
      >
        <fieldset className="flex flex-col gap-5 text-white text-base">
          <div className="flex justify-between">
            <legend className="">Password reset</legend>
            <button>
                <img src={EXIT_ICON} alt="X" />
            </button>
          </div>
          <div className="text-pale">
            Enter the email address you used to sign up to Riverside. We will
            send you a link to reset your password.
          </div>
          <Input register={register} name="email" placeholder="Email" />
          {errors.email && (
            <div className="text-red">{errors.email.message}</div>
          )}
          <button className="transition-all hover:opacity-80 bg-green text-black h-11 rounded-lg text-xs font-semibold">
            Send password reset email
          </button>
        </fieldset>
      </form>
    </div>
  )
}
