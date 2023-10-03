import React from 'react'

const ExploreHeader = ({ url, heading }) => {
  return (
    <header className="flex items-center mx-6 my-3">
      <img
        src={url}
        alt="trending"
        className=" h-20 w-20 rounded-full "
        loading="lazy"
      />
      <h1 className="text-2xl text-gray-900 font-medium pl-4">{heading}</h1>
    </header>
  )
}

export default ExploreHeader
