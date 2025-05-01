
const API_KEY ="37042868535dd41888321e37c099a5d3";
const BASE_URL = "https://api.themoviedb.org/3"



export const searchMovies = async (query) =>{ 
    const response = await fetch (
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );   
   const data = await response.json()
   return data.results
   
   };

   export const getPopularMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Fetching popular movies failed:", error);
      return [];
    }
  };