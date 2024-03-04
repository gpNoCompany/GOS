import GOOGLE_ICON from '../../../assets/icons/Frame_google.png'
import FACEBOOK_ICON from '../../../assets/icons/Frame_facebook.png'

export const SignInForm = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-light-black">
      <form className="w-80">
        <fieldset className="flex flex-col gap-5 text-white mb-5">
          <legend className="text-center text-2xl font-black mb-5">
            Log in to [name]
          </legend>
          <input
            className="py-3.5 px-3 rounded-lg h-11 bg-dark-gray"
            placeholder="Email"
            type="email"
          />
          <input
            className="py-3.5 px-3 rounded-lg h-11 bg-dark-gray"
            placeholder="Password"
            type="password"
          />
          <button className="text-light-gray text-right">
            Forgot your password?
          </button>
          <button className="bg-white text-black h-11 rounded-lg text-xs font-semibold">
            Log in
          </button>
        </fieldset>
        <div className="mb-5 flex items-center relative before:flex-1 before:border-light-gray before:border  after:flex-1 after:border-light-gray after:border  before:left-0 after:right-0">
          <div className="text-light-gray mx-5">or continue with</div>
        </div>
        <div className="flex flex-col gap-5">
          <button className="flex gap-3 justify-center items-center bg-btn-bg-black border border-btn-border-black rounded-lg h-11">
            <img src={GOOGLE_ICON} alt="Google" />
            <span className="font-bold text-white">Log in</span>
          </button>
          <button className="flex gap-3 justify-center items-center bg-btn-bg-black border border-btn-border-black rounded-lg h-11">
            <img src={FACEBOOK_ICON} alt="Facebook" />
            <span className="font-bold text-white">Log in</span>
          </button>
        </div>
      </form>
    </div>
  )
}
