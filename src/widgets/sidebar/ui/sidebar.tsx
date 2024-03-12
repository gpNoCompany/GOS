import { Button } from '@shared/ui/button'
import { ProgressInput } from '@shared/ui/progress'
import { useState } from 'react'

export const Sidebar = () => {
  const [progress, setProgress] = useState(13)

  return (
    <aside className="max-w-sidebar min-w-sidebar h-[calc(100dvh-83px)] py-5 px-2.5">
      <ul className="h-full flex flex-col gap-5">
        <li className="px-5">
          <Button label="add" />
        </li>
        <li className="flex flex-col gap-2.5 p-5 bg-gray-400 rounded-xl shadow-main">
          <h3 className="text-main text-first">Used space</h3>
          <ProgressInput progress={progress} />
          <p className="text-main text-white">666 Gb from 1 Тb </p>
        </li>
        <li className="overflow-y-auto">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 p-2.5">
              <img src="/icons/arrow.svg" alt="arrow" />
              <img src="/icons/folder.svg" alt="folder" />
              <h4 className="text-first">Remembered</h4>
            </div>
            <ul>
              <li className="flex items-center gap-1.5 p-2.5">
                <img src="/icons/arrow.svg" alt="arrow" />
                <img src="/icons/folder.svg" alt="folder" />
                <h4 className="text-first">Empty Folder</h4>
              </li>
            </ul>
          </div>
        </li>
        <li className="mt-auto">
          Download <span className="text-green">Standalone Version</span>
        </li>
      </ul>
    </aside>
  )
}
