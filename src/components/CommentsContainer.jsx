import React from 'react'

import CommentsList from './CommentsList'

const CommentsContainer = () => {
    return (
        <>
            <div className='p-2 m-2' >
                <div className="font-bold text-xl" >Nested Comments</div>
                <CommentsList />
            </div>
        </>
    )
}

export default CommentsContainer