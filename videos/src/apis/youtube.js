import axios from 'axios';

const KEY = 'AIzaSyAcEvf57YAzONDHa7H98SNyp-Xqgy7yzkg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
