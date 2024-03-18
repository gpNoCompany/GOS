const PATHS = [
  { id: 0, name: 'Root' },
  { id: 1, name: 'Remembered' },
]

export const Breadcrumbs = () => {
  return (
    <div className="flex items-center justify-between pt-5">
      <ul className="flex items-center gap-2.5 text-2xl">
        {PATHS.map((path, index) => (
          <li key={path.id} className="flex items-center">
            {path.name}
            {index !== PATHS.length - 1 && (
              <div className="flex items-center justify-center w-5 h-5 ml-2.5">
                <img src="/icons/arrow.svg" alt="arrow" />
              </div>
            )}
          </li>
        ))}
      </ul>
      <p>6 folders and 7 files</p>
    </div>
  )
}
