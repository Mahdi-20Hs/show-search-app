
import axios from 'axios'
async function fetchTvShow(keyword){
  let noSpaceKeyword = keyword.replace(' ', '+');
  try{
    const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${noSpaceKeyword}`);
    return response.data;
  }catch{
    alert('No data about the show');
  }
}

export default fetchTvShow