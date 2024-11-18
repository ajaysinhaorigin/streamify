import React from "react";

const ExploreHeader = ({ url, heading }) => {
  return (
    <header className="flex items-center mx-6 my-3">
      {url && (
        <img
          src={url}
          alt="trending"
          className=" h-20 w-20 rounded-full "
          loading="lazy"
        />
      )}
      <h1 className="text-2xl font-medium pl-4 text-white">{heading}</h1>
    </header>
  );
};

export default ExploreHeader;
