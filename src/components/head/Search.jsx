import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";
// import useFetchSuggestionsVideos from '../../hooks/useFetchSuggestionsVideos'
import { BsSearch } from "react-icons/bs";
import useFetchSearchSuggestions from "../../hooks/useFetchSearchSuggestions";

const Search = () => {
  // const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState("");
  // const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate();
  // console.log(searchQuery)
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = useFetchSearchSuggestions(search);

  // useFetchSuggestionsVideos(searchQuery)

  const handleClick = (suggestion) => {
    // setSearchQuery(suggestion)
    setSearch(suggestion);
    // setShowSuggestions(false)
    navigate("/results?search_query=" + suggestion);
  };
  const handleFocus = () => {
    setShowSuggestions(true);
  };

  useEffect(() => {
    const handleBlur = () => {
      setTimeout(() => {
        setShowSuggestions(false);
      }, 200);
    };
    const searchBar = document.getElementById("searchbar");
    searchBar.addEventListener("blur", handleBlur);

    return () => {
      searchBar.removeEventListener("blur", handleBlur);
    };
  }, [showSuggestions]);

  return (
    <>
      <div className="lg:w-[600px]">
        <form
          className="flex relative"
          onSubmit={(e) => {
            e.preventDefault();
            // setSearchQuery(search)
            if (search !== "") {
              navigate("/results?search_query=" + search);
            }
            setShowSuggestions(false);
          }}
        >
          {showSuggestions && (
            <BsSearch className="absolute my-3 mx-3 text-white " />
          )}
          <input
            id="searchbar"
            className="w-full border border-zinc-700 text-white bg-zinc-900 py-1 px-10 rounded-l-full focus:border-blue-500 focus:outline-none text-lg"
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onFocus={() => handleFocus()}
          />

          <button className="border border-zinc-700 py-1 px-6 rounded-r-full bg-zinc-800">
            <BsSearch className="text-lg text-white" />
          </button>
        </form>
        <ul className="lg:w-2/5 w-4/6 absolute bg-zinc-800 text-white shadow-lg rounded-lg mt-1">
          {showSuggestions &&
            suggestions.length > 0 &&
            suggestions?.map((suggestion, i) => (
              <SuggestionCard
                suggestion={suggestion}
                handleClick={handleClick}
                key={i}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
