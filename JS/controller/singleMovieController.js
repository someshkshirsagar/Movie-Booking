
import MovieService from "../service/singleMovieService.js"


$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const movieID= urlParams.get("id");
  console.log(movieID);
  MovieService.getMovieDetailsById(movieID)
    .then((response) => {
      console.log(response.data);
      let movieDetails = response.data;

     
        // Check if _castImages and _cast are defined
        let castImagesHtml = movieDetails._castImages
          ? movieDetails._castImages
              .map(
                (castImage, index) => `<li class="cast-member">
                                  <img src="${castImage}" alt="Cast Member ${index + 1}" />
                                  <p class="cast-name"><b>${movieDetails._cast[index]}</b></p>
                              </li>`
              )
              .join('')
          : '';

        let div = `<div class="movie-overlay">
                      <img src="${movieDetails._image}" alt="${movieDetails._title}" />
                      <div class="movie-text">
                          <div class="movie-title">${movieDetails._title}</div>
                          <div class="movie-description">
                              <h2><b>${movieDetails._rating}</b><br/>
                              ${movieDetails._languages.join(', ')}</h2>
                              <div class="movie-button">
                                  <button type="button" class="button1 btn btn-info">BOOK NOW</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="cast-section" id="actorId">
                      <h2>Cast</h2>
                      <ul class="cast-list">${castImagesHtml}</ul>
                  </div>
                  <div class="col-md-10">
                      <h1><b>About Movie</b></h1>
                      <h3>${movieDetails._description}</h3>
                  </div>`;

        $(".movie-background").append(div);
      
    })
    .catch((error) => {
      console.log(error);
    });
});
