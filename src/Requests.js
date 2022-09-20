const API_KEY="214b6ceec4baed0f6ff5e88b79bfe234"

const requests ={
    fetchTrending:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNetflixOrignals:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies:`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchHorrorMovies:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchRomanceMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchDocumantaries:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;