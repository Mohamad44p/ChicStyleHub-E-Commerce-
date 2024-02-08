'use client';

import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MessagesProvider } from '../context/messages';

interface ChatProvidersProps {
  children: React.ReactNode
}

const ChatProviders: FC<ChatProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}><MessagesProvider>{children}</MessagesProvider></QueryClientProvider>
  )
}

export default ChatProviders