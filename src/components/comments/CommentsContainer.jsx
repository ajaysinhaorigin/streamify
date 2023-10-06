import { commentsData } from '../../common/config'
import CommentsCard from './CommentsCard'
const CommentsContainer = () => {
    return (
        <>
            <div className='p-2 m-2' >
                <div className="font-bold text-xl" >Nested Comments</div>
                <div>
                    {
                        commentsData?.map((comment, i) => <CommentsCard key={i} data={comment} />)
                    }

                </div>
            </div>
        </>
    )
}

export default CommentsContainer

