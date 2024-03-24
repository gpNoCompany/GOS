interface Props {
  item: {}
}

export const Card = ({ item }: Props) => {
  return (
    <div className="flex flex-col items-center py-2.5 px-4 gap-8">
      <div className="w-full flex justify-end">
        <img src="/icons/link.svg" alt="link" />
      </div>
      <div>
        <img src="/images/folder.png" alt="folder" />
      </div>
      <p className="max-w-full overflow-hidden text-ellipsis">{item.name}</p>
    </div>
  )
}
