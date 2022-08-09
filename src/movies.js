const baseUrl =
  "https://api.themoviedb.org/3/movie/now_playing/?api_key=3027119f10c132982a421854abed7380";

export const fetchingData = async () => {
  try {
    const response = await fetch(baseUrl);
    if (response.status === 200) {
      const data = await response.json();

      return data.results;
    } else {
      return response.status;
    }
  } catch (error) {}
};
