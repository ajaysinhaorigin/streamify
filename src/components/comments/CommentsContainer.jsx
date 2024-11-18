import useFetchVideoComments from "../../hooks/useFetchVideoComments";
import CommentsCard from "./CommentsCard";

const CommentsContainer = ({ videoId }) => {
  const comments = useFetchVideoComments(videoId);
  return (
    <>
      {comments?.map((comment, i) => (
        <CommentsCard key={comment?.id} {...comment} />
      ))}
    </>
  );
};

export default CommentsContainer;
