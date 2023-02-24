import React from 'react'
import { ChatEntry } from './ChatEntry'

const entries = [1, 2, 3, 4, 5, 6]

export const ChatEntries = () => {
  return (
    <div className=' w-full'>
      {
        entries.map(entradas => (
          <ChatEntry key={entradas} />
        ))
      }
    </div>
  )
}
