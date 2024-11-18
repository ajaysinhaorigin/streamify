import LikeButton from "../../common/LikeButton";
import useViewCounts from "../../hooks/useViewCounts";
import useVideoPublishTime from "../../hooks/useVideoPublishTime";
import User from "../head/User";

const CommentsCard = ({ replies, snippet }) => {
  const likeCount = useViewCounts(
    snippet?.topLevelComment
      ? snippet?.topLevelComment?.snippet?.likeCount
      : snippet?.likeCount
  );
  const time = useVideoPublishTime(
    snippet?.topLevelComment?.snippet?.publishedAt || snippet?.publishedAt
  );
  return (
    <>
      <div>
        <div className="flex px-2 py-1 mb-2  rounded-lg">
          {snippet?.topLevelComment && (
            <User
              url={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
            />
          )}
          {!snippet?.topLevelComment && (
            <User url={snippet?.authorProfileImageUrl} />
          )}
          {snippet?.topLevelComment && (
            <div>
              <h1 className=" text-sm font-medium">
                @{snippet?.topLevelComment?.snippet?.authorDisplayName}
                <span className="text-zinc-500 px-2">{time}</span>
              </h1>
              <h1 className="text-sm my-1">
                {snippet?.topLevelComment?.snippet?.textDisplay}
              </h1>
              <div className="flex my-2 items-center gap-3">
                <LikeButton like={true} />
                <p>{likeCount}</p>
                <LikeButton like={false} />
                <p className="text-sm font-medium px-3 py-[0.4rem] rounded-full hover:bg-zinc-800">
                  Reply
                </p>
              </div>
            </div>
          )}
          {!snippet?.topLevelComment && (
            <div>
              <h1 className="font-medium text-sm">
                @{snippet?.authorDisplayName}{" "}
                <span className="text-zinc-500 px-2">{time}</span>{" "}
              </h1>
              <h1 className="text-sm my-1">{snippet?.textDisplay}</h1>
              <div className="flex my-2 items-center gap-3">
                <LikeButton like={true} />
                <p>{likeCount}</p>
                <LikeButton like={false} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="ml-10">
        {replies?.comments?.map((comment, i) => (
          <CommentsCard key={comment?.id} {...comment} />
        ))}
      </div>
    </>
  );
};

export default CommentsCard;
