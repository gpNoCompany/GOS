import { Input } from '@shared/ui/input'

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-header shadow-main">
      <div className="min-w-sidebar">
        <h1 className="text-3xl text-white">GOS</h1>
      </div>
      <div className="flex justify-start flex-1 pl-10">
        <Input placeholder="Search..." />
      </div>
      <ul className="flex items-center gap-5">
        <li>
          <img src="/icons/info.svg" alt="info" />
        </li>
        <li className="flex items-center">
          <div className="w-10 h-10 overflow-hidden mr-2.5">
            <img src="/avatar.png" alt="avatar" />
          </div>
          <span className="text-white capitalize">Dollar Bill</span>
        </li>
        <li>
          <img src="/icons/logout.svg" alt="logout" />
        </li>
      </ul>
    </header>
  )
}
