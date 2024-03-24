import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2.5 bg-light-black">
      <h1 className="text-3xl font-bold text-white">Page not found</h1>
      <span className="text-center max-w-96">
        The page you are looking for may have been moved, deleted, or possibly
        never existed
      </span>
      <Link
        to="/"
        className="px-5 py-3 text-xs font-semibold text-black transition-all rounded-lg hover:opacity-80 bg-green"
      >
        Back to homepage
      </Link>
      <div className="pointer-events-none absolute font-extrabold opacity-5 text-[22rem]">
        404
      </div>
    </div>
  )
}
