  class MovieService{

    static url="http://localhost:3000/movies"; 
    static async getMovieDetailsById(id){
     return await axios.get(this.url+"/"+id);
    }
   
 }
 export default MovieService;