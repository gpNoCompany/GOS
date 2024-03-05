import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ placeholder, ...rest }: Props) => {
  return (
    <div className="flex items-center py-2.5 bg-body border-[1px] border-transparent rounded-xl overflow-hidden focus-within:border-[1px] focus-within:border-white">
      <div className="px-2.5">
        <img src="/icons/search.svg" alt="search" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="pr-2.5 text-main text-thirdly outline-0 border-0 bg-transparent group placeholder:text-thirdly focus:outline-none"
        {...rest}
      />
    </div>
  )
}
