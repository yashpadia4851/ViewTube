const MY_GOOGLE_API_KEY = process.env.REACT_APP_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  MY_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const IMAGE_USER =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEk5bOxiGYUCehEtt3ertRSiw-LkT2kiqKzkWwvHRA2ryATKiUER0K7APDupkRI-ou6h4&usqp=CAU";

export const CHAT_USER_IMAGE =
  "https://yt4.ggpht.com/ytc/AIf8zZRigSzMm78aHT9FpZDt8Jwp_shhdohjHU0XnA=s32-c-k-c0x00ffffff-no-rj";

export const LIVE_CHAT_COUNT = 25;

export const COMMENTS_IMAGE =
  "https://pluginicons.craft-cdn.com/commentscvQGFyYIVV53CsHK33dTFFHFFgXnYd9dm0OF.svg?1535165130";
