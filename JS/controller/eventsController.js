import HomeService from "../service/homeService.js"

$(document).ready(function () {
   
  
    HomeService.getEventDetails().then((response) => {
      
        console.log(response.data);
        let events = response.data;

        for (let event of events) {


            let div = ` 
            
                     
            
                        <div class="card" id="single-event-card" eventID='${event.id}'>

                        <img src="${event._image}" class="card-img-top" alt="${event._title}" >
                        <div class="card-body">
                        <h5 class="card-title">${event._title}</h5>
                         <p class="card-text">${event._genre}</p>
                         <a href="#" class="btn btn-primary">Book Now</a>
                         </div>
                    </div>  
                    `;

            $("#all-events-container").append(div)
        }
         // Add click event handler for movie cards
         $(document).on('click', '#single-event-card', function () {
            let id = $(this).attr("eventID");
            window.location.href = `../../HTML/singleEvent.html?id=${id}`;
        });

    //     let div = `<div class="card" id="single-movie-card" movieID='${movie.id}' >
    //     <img src="${movie._image}" class="card-img-top" alt="${movie._title}" >
    //     <div class="card-body">
    //         <h5 class="card-title">${movie._title}</h5>
    //         <p class="card-text">${movie._genre}</p>
    //         <a href="#" class="btn btn-primary">Book Now</a>
    //     </div>
    // </div>`;

    }).catch((error) => {
        console.log(error);
    })
})
   
