export const GOOGLEAPIKEY = process.env.REACT_APP_KEY;


export const HAMBURGERIMAGE =
  "https://tse2.mm.bing.net/th?id=OIP.d7oB5HCGcAd1w6NV7NSYBgHaHa&pid=Api&P=0&h=220";

export const VIEWTUBELOGO =
  "https://review1st.com/wp-content/uploads/2021/10/113804077_ytm.jpg";

export const USERICON =
  "https://yt3.ggpht.com/yti/ANjgQV9CqSnkqPE6uvyf2JUeORStd41b0R7H2Nsq6xwbE7d15p8=s88-c-k-c0x00ffffff-no-rj";


// This is Youtube APi 
export const YOUTUBEAPI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLEAPIKEY;


// This is tha watch vedio API at the watch page 
export const WATCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLEAPIKEY +
  "&id=";

  // This is Comment API at below the watch page 
  export const COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=" +
  GOOGLEAPIKEY +
  "&videoId=";

  // This is suggestion vedio API at the main page
  export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLEAPIKEY;

  // This is input search suggestion api 
  export const YOUTUBE_SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&hl=en&q="


  // This is button suggestion API 
  export const CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key= " +
  GOOGLEAPIKEY;

  export const SEARCH_RESULT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  GOOGLEAPIKEY +
  "&q=";

  export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&hl=en&q=";

  export const DEFAULT_PROFILE =
  "https://img.freepik.com/free-icon/user_318-504048.jpg?t=st=1692424418~exp=1692425018~hmac=bede93fb24b4fc5cd4b9abe4a6146b8b037c3be765c706bba5586b36f8813427";


  export const LIVE_CHAT_COUNT = 20;
  