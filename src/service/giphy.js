/* eslint-disable no-unused-vars */
const apiKey = 'ijm58i3P9FAaAuudv92DNkZJTm94wL4r';


export const getGif = (searchTerm) => {
    
    // Construct the API endpoint URL with the search term and API key
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${apiKey}&limit=1`;
    // https://api.giphy.com/v1/gifs/search?api_key=ijm58i3P9FAaAuudv92DNkZJTm94wL4r&q=Well+done%21&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips
// Make a GET request to the Giphy API endpoint
   return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const url1 = data.data[0].images.original.url;
        return url1;
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });

}