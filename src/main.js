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

  const showData = await fetchTvShow(searchValue);
  const showName = showData.name;
  const showGenres = showData.genres;
  const showStatus = showData.status;
  const showRating = showData.rating.average;
  const showNetwork = showData.network.name;
  const showSummary = showData.summary;
  const showImg = showData.image.medium;
  populate(showName, showGenres, showStatus, showRating, showNetwork, showSummary, showImg);
})
