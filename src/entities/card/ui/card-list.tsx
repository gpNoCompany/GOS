import { Card } from './card'

const CARD_MOCK = [
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
  { id: 0, name: 'Untitled112123213213213123', type: 'folder', link: true },
  { id: 0, name: '1', type: 'file', link: false },
]

export const CardList = () => {
  return (
    <ul className="h-full overflow-y-scroll grid grid-cols-7 py-7 gap-5">
      {CARD_MOCK.map((card) => (
        <li key={card.id}>
          <Card item={card} />
        </li>
      ))}
    </ul>
  )
}
