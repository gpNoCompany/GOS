import React from 'react'
import GOOGLE_ICON from '../../../assets/icons/Frame_google.png'
import FACEBOOK_ICON from '../../../assets/icons/Frame_facebook.png'

export const SocialsAccReg = () => {
  return (
    <div className="flex flex-col gap-5">
      <button type='button' className="transition-all hover:bg-dark-gray flex gap-3 justify-center items-center bg-btn-bg-black border border-btn-border-black rounded-lg h-11">
        <img src={GOOGLE_ICON} alt="Google" />
        <span className="font-bold text-white">Log in</span>
      </button>
      <button type='button' className="transition-all hover:bg-dark-gray flex gap-3 justify-center items-center bg-btn-bg-black border border-btn-border-black rounded-lg h-11">
        <img src={FACEBOOK_ICON} alt="Facebook" />
        <span className="font-bold text-white">Log in</span>
      </button>
    </div>
  )
}
