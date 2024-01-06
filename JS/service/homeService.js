class HomeService{
   static url= "http://localhost:3000";

   static async getMovieDetails(){
    return await axios.get(this.url+"/"+"movies");
   }

   static async getEventDetails(){
      return await axios.get(this.url+"/"+"events");
     }
   
     static async getMovieDetailsByCity(city) {
      const response = await axios.get(`${this.url}/movies`);
      const movies = response.data;

      // Filter movies based on the selected city
      const filteredMovies = city === "All" ? movies : movies.filter(movie => movie._availableInCity.includes(city));
      
      return filteredMovies;
  }
}
export default HomeService;