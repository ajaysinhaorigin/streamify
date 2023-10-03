export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const YOUTUBE_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='

export const YOUTUBE_SINGLE_VIDEO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='

// button list for different video categories
export const BUTTON_LIST_API =
  'https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=In&key='

//responsed videos to different category button
export const BUTTON_CATEGORY_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&videoCategoryId='

// youtube search apis
export const YOUTUBE_SEARCH_SUGGECTIONS_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const YOUTUBE_SEARCH_RESULTS_API =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&q=iphone&maxResults=25&key='

// youtube short apis
export const YOUTUBE_SHORTS_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&videoDuration=short&key=AIzaSyAkPP1w3hI-l5tP7cA-Vvw1_945eT-twew'

// youtube Explore videos api
export const YOUTUBE_EXPLORE_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='

// 2.  by category
export const YOUTUBE_TRENDING_VIDEOS_BY_CATEGORY_API =
  'https://youtube.googleapis.com/youtube/v3/search?maxResults=25&q=trending&type=video&videoCategoryId='

export const YOUTUBE_LIVE_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&type=video&key='

export const commentsData = [
  {
    name: 'Ajay Sinha',
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
    replies: [
      {
        name: 'tanay',
        title:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
        replies: [
          {
            name: 'tanay',
            title:
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
            replies: [
              {
                name: 'hitesh',
                title:
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
                replies: [
                  {
                    name: 'Akshay saini',
                    title:
                      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
                    replies: [
                      {
                        name: 'tanay',
                        title:
                          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
                        replies: [],
                      },
                      {
                        name: 'hitesh',
                        title:
                          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'hitesh',
            title:
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
            replies: [],
          },
        ],
      },
      {
        name: 'hitesh',
        title:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
        replies: [],
      },
    ],
  },
  {
    name: 'Akshay saini',
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
    replies: [],
  },
  {
    name: 'tanay',
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
    replies: [],
  },
  {
    name: 'hitesh',
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati temporibus?',
    replies: [],
  },
]

// playlist by channel name
const playlistbychannel =
  'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyAq2RmyUE4VtIp_dZqJnOuF3VOzmH-IZPM'

// playlist items by playlistId = id in response

const playlistItems =
  'https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=PLOU2XLYxmsII2j07liOC0htEsjOI3IPCt&key=AIzaSyAq2RmyUE4VtIp_dZqJnOuF3VOzmH-IZPM'

//https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLOU2XLYxmsIK3U6yyp5vsBXFHDpC0XTXV&key=AIzaSyAq2RmyUE4VtIp_dZqJnOuF3VOzmH-IZPM

//https://yt.lemnoslife.com/videos?part=short&id=VIDEO_ID
