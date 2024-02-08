import { FC } from 'react'

interface ChatHeaderProps {
  // Define your component props here
}

const ChatHeader: FC<ChatHeaderProps> = ({ /* destructure props here */ }) => {
  return (
    <div className='w-full flex gap-3 justify-start items-center text-zinc-800'>
      <div className='flex flex-col items-start text-sm'>
        <p className='text-xs'>Chat with</p>
        <div className='flex items-center gap-1.5'>
          <p className='w-2 h-2 rounded-full bg-green-500'/>
          <p className='font-medium'>ChicStyleHub support Bot</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader