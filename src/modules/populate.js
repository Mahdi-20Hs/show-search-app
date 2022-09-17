import {
  showName,
  showGenres,
  showStatus,
  showRating,
  showNetwork,
  showSummary,
  imgContainer,
  infoContainer
} from './DOM.js';

function populate(name, genres, status, rating, network, summary, img){
  imgContainer.style.backgroundImage = `url(${img})`;
  showName.textContent = `Name: ${name}`;
  genres.forEach((genre) => {
    showGenres.textContent = `Genres: ${showGenres.textContent.replace('Genres:', '') + ' ' + genre}`;
  })
  showStatus.textContent = `Status: ${status}`;
  showRating.textContent = `Rating: ${rating}`;
  showNetwork.textContent = `Network: ${network}`;
  showSummary.innerHTML = summary;

  infoContainer.append(showName, showGenres, showStatus, showRating, showNetwork, showSummary);
}

export default populate;