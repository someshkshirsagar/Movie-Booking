import HomeService from "../service/homeService.js"

$(document).ready(function () {
    HomeService.getMovieDetails().then((response) => {
        console.log(response.data);
        let movies = response.data;

        let count = 0;
        for (let movie of movies) {

            if (count >= 5) {
                break; 
            }

            let div = `<div class="card " id="single-movie-card" movieID='${movie.id}' style="width: 18rem;">

                        <img src="${movie._image}" class="card-img-top" alt="${movie._title}" width:"10px">
                        <div class="card-body">
                        <h5 class="card-title">${movie._title}</h5>
                         <p class="card-text">${movie._genre}</p>
                         <a href="#" class="btn btn-primary">Book Now</a>
                         </div>
                    </div>`;

            $(".movie-container").append(div);
            count++;
        }
        

        $(document).on('click','#all-movies-btn', function(){
            window.location.href="../../HTML/allMovies.html";
        })
        
        $(document).on('click','#single-movie-card',function(){
            let id = $(this).attr("movieID");
            console.log(id);
            window.location.href=`../../HTML/singleMovie.html?id=${id}`;
        })

    }).catch((error) => {
        console.log(error);
    })
   
    HomeService.getEventDetails().then((response) => {
        console.log(response.data);
        let events = response.data;
        console.log(events);

        for (let event of events) {


            let div = ` 
            
                     
            
                        <div class="card" id="single-event-card" style="width: 18rem;">

                        <img src="${event._image}" class="card-img-top" alt="${event._title}" width:"10px">
                        <div class="card-body">
                        <h5 class="card-title">${event._title}</h5>
                         <p class="card-text">${event._genre}</p>
                         <a href="#" class="btn btn-primary">Book Now</a>
                         </div>
                    </div>  
                    `;

            $(".event-container").append(div)
        }
        $(document).on('click','#all-events-btn',
        function(){
            window.location.href="../../HTML/allEvents.html";
        })
      
    }).catch((error) => {
        console.log(error);
    })
}

)