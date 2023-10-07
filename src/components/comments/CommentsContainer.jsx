import { commentsData } from '../../common/config'
import useFetchVideoComments from '../../hooks/useFetchVideoComments'
import CommentsCard from './CommentsCard'

const CommentsContainer = ({ videoId }) => {
    console.log(videoId)
    const comments = useFetchVideoComments(videoId)
    return (
        <>
            <div>
                {
                    comments?.map((comment, i) => <CommentsCard key={comment?.id} {...comment} />)
                }

            </div>
        </>
    )
}

export default CommentsContainer

