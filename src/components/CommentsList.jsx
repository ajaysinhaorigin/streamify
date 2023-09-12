import React from 'react'
import { commentsData } from '../common/config'
import CommentsCard from './CommentsCard'
const CommentsList = () => {
    return (
        <div>
            {
                commentsData?.map((comment, i) => <CommentsCard key={i} data={comment} />)
            }

        </div>
    )
}

export default CommentsList