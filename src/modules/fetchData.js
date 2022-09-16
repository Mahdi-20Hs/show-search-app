
import axios from 'axios'
async function fetchTvShow(keyword){
  keyword = keyword.replcae(' ', '+');
  const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${keyword}`);
  return response[0];

}

export default fetchTvShow