const useVideoPublishTime = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()

  // Calculate the time difference in seconds
  const timeDifference = Math.floor((now - date) / 1000)
  if (timeDifference > 31557600) {
    const years = Math.floor(timeDifference / 31557600)
    return `${years} ${years === 1 ? 'year' : 'years'} ago`
  } else if (timeDifference > 2592000) {
    const months = Math.floor(timeDifference / 2592000)
    return `${months} ${months === 1 ? 'month' : 'months'} ago`
  } else if (timeDifference > 86400) {
    const days = Math.floor(timeDifference / 86400)
    return `${days} ${days === 1 ? 'day' : 'days'} ago`
  } else if (timeDifference > 3600) {
    const hours = Math.floor(timeDifference / 3600)
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
  } else if (timeDifference > 60) {
    const minutes = Math.floor(timeDifference / 60)
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
  } else {
    return `${timeDifference} seconds ago`
  }
}

export default useVideoPublishTime
