import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID YLzYYhjsow2BifTwz0Fd_grdcktT2648WjxmR16aE1s',
  },
});
