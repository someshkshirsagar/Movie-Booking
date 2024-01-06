import HomeService from "../service/homeService.js"

$(document).ready(function () {
    // Function to display movies based on the provided list
    function displayMovies(movies) {
        $("#all-movies-container").empty();

        for (let movie of movies) {
            let div = `<div class="card" id="single-movie-card" movieID='${movie.id}' >
                        <img src="${movie._image}" class="card-img-top" alt="${movie._title}" >
                        <div class="card-body">
                            <h5 class="card-title">${movie._title}</h5>
                            <p class="card-text">${movie._genre}</p>
                            <a href="#" class="btn btn-primary">Book Now</a>
                        </div>
                    </div>`;

            $("#all-movies-container").append(div);
        }

        // Add click event handler for movie cards
        $(document).on('click', '#single-movie-card', function () {
            let id = $(this).attr("movieID");
            window.location.href = `../../HTML/singleMovie.html?id=${id}`;
        });
    }

    // Add a change event handler for the dropdown
    $('#cityDropdown').on('click', '.dropdown-item', function () {
        let selectedCity = $(this).attr('value');

        // Call getMovieDetails with the selected city
        HomeService.getMovieDetailsByCity(selectedCity).then((filteredMovies) => {
            console.log(filteredMovies);
            displayMovies(filteredMovies);
        }).catch((error) => {
            console.log(error);
        });
    });

    // Trigger the default case by simulating a click on the "All" option
    $('#cityDropdown').find('.dropdown-item[value="All"]').trigger('click');
});