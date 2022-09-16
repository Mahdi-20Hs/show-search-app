import {
  showName,
  showGenres,
  showStatus,
  showRating,
  showNetwork,
  showSummery,
  imgContainer,
  infoContainer
} from './DOM.js';

function populate(name, genres, status, rating, network, summery, img){
  imgContainer.style.backgroundImage = img;
  showName.textContent = `Name: ${name}`;
  genres.forEach((genre) => {
    showGenres.textContent = `Genres: ${showGenres.textContent + ' ' + genre}`;
  })
  showStatus.textContent = `Status: ${status}`;
  showRating.textContent = `Rating: ${rating}`;
  showNetwork.textContent = `Network: ${network}`;
  showSummery.textContent = `Summery: ${summery}`;

  infoContainer.append(showName, showGenres, showStatus, showRating, showNetwork, showSummery);
}

export default populate;