import * as Progress from '@radix-ui/react-progress'

interface Props {
  progress: number
}

export const ProgressInput = ({ progress }: Props) => {
  return (
    <Progress.Root
      className="relative flex items-center w-full h-2.5 bg-[#484a4d] rounded-lg overflow-hidden"
      value={progress}
    >
      <Progress.Indicator
        className="w-full h-[calc(100%+2px)] bg-secondary border-2 border-gray rounded-lg"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}
