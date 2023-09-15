import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveMessage } from '../../features/liveChatSlice'
import LiveChatCard from './LiveChatCard'
import { generateName, generateText } from '../../common/helperFunctions'

const LiveChatContainer = () => {
    const [liveMessage, setLiveMessage] = useState('')
    const { liveChat } = useSelector(store => store.liveChat)
    const dispatch = useDispatch()
    useEffect(() => {
        setInterval(() => {
            getLiveChat()
        }, 1500)
    }, [])

    const getLiveChat = () => {
        let name = generateName()
        let message = generateText(20)
        dispatch(addLiveMessage({ name: name, message: message }))


    }

    return (
        <div className='ml-3 py-2 px-4 border border-gray-700 rounded-lg bg-gray-100' >
            <h1 className='py-1 font-medium text-lg border-b border-black' >Live Chat</h1>
            <div className='h-[350px] overflow-y-scroll flex flex-col-reverse' >

                {
                    liveChat?.map((liveChat, i) => <LiveChatCard name={liveChat?.name} message={liveChat?.message} key={i} />)
                }
            </div>
            <div className='border-t border-black' >
                <form onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addLiveMessage({ name: 'Ajay', message: liveMessage }))
                    setLiveMessage('')
                }} >
                    <input className='border border-black text-gray-800 rounded-lg p-2 m-2' type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                    <button className='px-4 py-2 rounded bg-green-500 text-white' >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LiveChatContainer