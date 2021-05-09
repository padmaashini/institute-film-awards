## Shopify Frontend Developer Intern Challenge

This is my submission to the Shopify Frontend Developer Intern Challenge. 

It is deployed using Heroku and can be found live here: https://shopify-shoppies-movie-awards.herokuapp.com/

The challenge was to create a webpage where users can search for movies and nominate them for "The Shoppies - Movie Awards," using the OMDB API (https://www.omdbapi.com/). Users can only nominate a maximum of 5 movies, and can add and remove movies from the search list. They can also view their nominations in the /nominations page, where they can also remove nominations. If the user navigates to the /nominations page and returns to the search results, the search results will still be there, but will reset on hard page refresh. The nominations, however, are persisted using Redux persist in localStorage so that they are even available on hard page refresh. 

This application was build using Next.js (React framework), with libraries such as Material UI, Redux Persist, and Reselect. 

These were the basic technical requirements from the challenge: 

1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.


The images used in this project are from Unsplash (https://unsplash.com/) and are freely-usable. 
