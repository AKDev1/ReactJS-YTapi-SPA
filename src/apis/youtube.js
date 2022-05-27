import axios from 'axios';
const KEY = 'AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 20, //Change the number of maxResults to show more videos in one API call
    key: KEY
  }
})
