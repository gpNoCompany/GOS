const MENU_ITEMS = [
  {
    id: 0,
    name: 'Download 1.2 Gb',
    icon: '/icons/download.svg',
  },
  {
    id: 1,
    name: 'Delete',
    icon: '/icons/trash.svg',
  },
  {
    id: 2,
    name: 'Copy',
    icon: '/icons/copy.svg',
  },
  {
    id: 3,
    name: 'Remove',
    icon: '/icons/crosshair.svg',
  },
]

export const Menu = () => {
  return (
    <div className="flex items-center justify-between text-main">
      <ul className="flex items-center gap-5">
        <div className="flex items-center gap-7">
          <li className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10">
              <div className="flex items-center justify-center w-5 h-5 p-1 bg-green rounded-full">
                <img src="./icons/check.svg" alt="check" />
              </div>
            </div>
            3
          </li>
          <li>Select all</li>
        </div>
        {MENU_ITEMS.map((item) => (
          <li key={item.id} className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10">
              <img src={item.icon} alt={item.name} />
            </div>
            {item.name}
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-5">
        <li className="flex items-center">
          Sort by
          <div className="flex items-center justify-center w-10 h-10 rotate-90">
            <img src="/icons/arrow.svg" alt="arrow" />
          </div>
        </li>
        <div className="flex items-center">
          <li className="flex items-center justify-center w-10 h-10">
            <img src="/icons/row.svg" alt="row" />
          </li>
          <li className="flex items-center justify-center w-10 h-10">
            <img src="/icons/grid.svg" alt="grid" />
          </li>
        </div>
      </ul>
    </div>
  )
}
