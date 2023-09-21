export const YOUTUBE_API_KEY = 'AIzaSyDBRcXANK_uy1aGSz1b2tAXbcuS9l8Mgk8'

export const YOUTUBE_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='

export const YOUTUBE_SINGLE_VIDEO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='

export const YOUTUBE_SEARCH_SUGGECTIONS_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const YOUTUBE_SEARCH_RESULTS_API =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&q=iphone&maxResults=25&key='

// button list for different video categories
export const BUTTON_LIST_API =
  'https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=In&key='

//responsed videos to different category button
export const BUTTON_CATEGORY_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&videoCategoryId='

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
