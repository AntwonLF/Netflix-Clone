const functions = require("firebase-functions");
const axios = require("axios");


exports.fetchMovies = functions.https.onRequest(async (request, response) => {
  const apiUrl = "https://www.themoviedb.org/discover/tv?api_key=YOUR_API_KEY&width_networks=213";

  try {
    const apiResponse = await axios.get(apiUrl);
    response.json(apiResponse.data);
  } catch (error) {
    console.error("API request failed", error);
    response.status(500).send("Error fetching data from the API");
  }
});
