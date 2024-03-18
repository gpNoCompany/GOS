import { UseFormRegister } from 'react-hook-form'
import { FormFields } from '../types/types'

type InputProps = {
  placeholder: string
  name: 'email' | 'password' | 'login'
  type?: string
  register: UseFormRegister<FormFields>
}
export const Input = ({ placeholder, type, name, register }: InputProps) => {
  return (
    <>
      <input
        className="placeholder:text-gray-600 transition-all hover:bg-input-hover outline-2 outline-input-border-gray py-3.5 px-3 rounded-lg h-11 bg-dark-gray"
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
    </>
  )
}
