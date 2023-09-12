const YOUTUBE_API_KEY = 'AIzaSyAq2RmyUE4VtIp_dZqJnOuF3VOzmH-IZPM'

export const YOUTUBE_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  YOUTUBE_API_KEY

export const videos =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&q=iphone&maxResults=25&key=AIzaSyAq2RmyUE4VtIp_dZqJnOuF3VOzmH-IZPM'

export const YOUTUBE_SEARCH_SUGGECTIONS_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

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
