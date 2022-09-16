import './assets/styles/styles.css';
import { searchBtn, searchBar } from './modules/DOM';
import fetchTvShow from './modules/fetchData';
import populate from './modules/populate';

searchBtn.addEventListener('click', async () => {
  if(searchBar.validity.valueMissing){
    alert('you must type a name');
    return;
  }
  const searchValue = searchBar.value;
  let showData;
  try{
    showData = await fetchTvShow(searchValue);
  }catch{
    alert('something wrong with fetching')
  }

  const showName = showData.show.name;
  const showGenres = showData.show.genres;
  const showStatus = showData.show.status;
  const showRating = showData.show.rating;
  const showNetwork = showData.show.network.name;
  const showSummary = showData.show.summary;
  const showImg = showData.show.image.medium;

  populate(showName, showGenres, showStatus, showRating, showNetwork, showSummary, showImg)
})
