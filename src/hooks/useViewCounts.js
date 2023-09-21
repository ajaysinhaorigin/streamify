const useViewCounts = (viewCount) => {
  if (viewCount > 1000000) {
    const views = (viewCount / 1000000).toFixed(1) + 'M'
    return `${views} views`
  } else if (viewCount > 1000) {
    const views = (viewCount / 1000).toFixed(1) + 'K'
    return `${views} views`
  } else {
    return `${viewCount} views`
  }
}

export default useViewCounts
