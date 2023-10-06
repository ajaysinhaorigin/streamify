import React, { useState } from 'react'
import { AiOutlineBell } from 'react-icons/ai'

const SubscribeButton = () => {
  const [clickEvent, setClickEvent] = useState(false)
  return (
    <button className="mx-5" onClick={() => setClickEvent(!clickEvent)}>
      {clickEvent === true ? (
        <div className="flex py-[0.38rem] px-4 rounded-full bg-zinc-700 hover:bg-zinc-700 ml-4 text-gray-200 font-medium">
          {/* <AiOutlineBell className="text-2xl" /> */}
          Subscribed
        </div>
      ) : (
        <div className="py-[0.38rem] px-4 rounded-full bg-gray-100 hover:bg-gray-300 ml-4 text-gray-900 font-medium">
          Subscribe
        </div>
      )}
    </button>
  )
}

export default SubscribeButton
