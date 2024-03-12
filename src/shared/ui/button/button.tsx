import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button = ({ label, ...rest }: Props) => {
  return (
    <button
      className="inline-flex items-center px-5 py-2.5 text-main text-black capitalize bg-green rounded-xl"
      {...rest}
    >
      <img src="/icons/plus.svg" alt="plus" className="mr-3" /> {label}
    </button>
  )
}
