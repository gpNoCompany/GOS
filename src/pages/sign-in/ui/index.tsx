export const SignInForm = () => {
  return (
    <div className="flex ">
      <form>
        <fieldset className="flex flex-col">
          <legend>Log in to [name]</legend>
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <button>Forgot your password?</button>
          <button>Log in</button>
        </fieldset>
      </form>
    </div>
  )
}
