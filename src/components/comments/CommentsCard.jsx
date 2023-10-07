import User from "../head/User"

const CommentsCard = ({ replies, snippet }) => {
    return (
        <>
            <div className='flex px-2 py-1 mb-2 bg-zinc-800 rounded-lg' >
                {
                    snippet?.topLevelComment && <User url={snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
                }
                {
                    !snippet?.topLevelComment && <User url={snippet?.authorProfileImageUrl} />
                }
                {
                    snippet?.topLevelComment && <div>
                        <h1 className='font-medium' >{snippet?.topLevelComment?.snippet?.authorDisplayName}</h1>
                        <h1 className="text-sm">{snippet?.topLevelComment?.snippet?.textDisplay}</h1>
                    </div>
                }
                {
                    !snippet?.topLevelComment && <div>
                        <h1 className='font-medium' >{snippet?.authorDisplayName}</h1>
                        <h1 className="text-sm">{snippet?.textDisplay}</h1>
                    </div>
                }

            </div>
            <div className='ml-6'>
                {
                    replies?.comments?.map((comment, i) => <CommentsCard key={comment?.id} {...comment} />)
                }
            </div>
        </>

    )
}

export default CommentsCard