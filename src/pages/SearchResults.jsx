import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetchSuggestionsVideos from "../hooks/useFetchSuggestionsVideos";
import Shimmer from "../common/Shimmer";
import SuggestionVideoCard from "../components/suggestionVideo/SuggestionVideoCard";
import { openMenu } from "../features/appSlice";
import { useDispatch } from "react-redux";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  useEffect(() => {
    const query = searchParams.get("search_query");
    setQuery(query);
  }, [searchParams]);

  const suggestionVideos = useFetchSuggestionsVideos(query);
  // console.log(suggestionVideos)

  if (!suggestionVideos) return null;

  return suggestionVideos.length === 0 ? null : (
    <div className="ml-60 pt-20">
      {suggestionVideos?.map((video, i) => (
        <Link to={"/watch?v=" + video?.id?.videoId} key={i}>
          {" "}
          <SuggestionVideoCard {...video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
