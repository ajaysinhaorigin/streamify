import React from 'react'

const ExploreHeader = ({ url, heading }) => {
  return (
    <header className="h-20 w-20 flex items-center mx-6 my-3">
      <img src={url} alt="trending" className="rounded-full" />
      <h1 className="text-2xl text-gray-900 font-medium pl-4">{heading}</h1>
    </header>
  )
}

export default ExploreHeader
