import { Header } from '@widgets/header'
import { Sidebar } from '@widgets/sidebar'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="h-full w-full flex flex-col py-8 pr-10 pl-14">
          {children}
        </main>
      </div>
    </>
  )
}
