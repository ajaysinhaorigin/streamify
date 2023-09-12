import React from 'react'

const LiveChatCard = ({ name, message }) => {
    return (
        <div className='m-1 py-2 px-2' >
            <h1 className='font-bold text-lg' >{name}</h1>
            <h1>{message}</h1>
        </div>
    )
}

export default LiveChatCard