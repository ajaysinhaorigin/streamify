const YOUTUBE_API_KEY = 'AIzaSyAq2RmyUE4VtIp_dZqJnOuF3VOzmH-IZPM'

export const YOUTUBE_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  YOUTUBE_API_KEY
