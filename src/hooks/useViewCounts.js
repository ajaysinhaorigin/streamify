const useViewCounts = (viewCount) => {
  if (viewCount > 1000000) {
    const views = (viewCount / 1000000).toFixed(1) + "M";
    return `${views} `;
  } else if (viewCount > 1000) {
    const views = (viewCount / 1000).toFixed(1) + "K";
    return `${views}`;
  } else {
    return `${viewCount}`;
  }
};

export default useViewCounts;
