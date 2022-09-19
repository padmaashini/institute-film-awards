## The Institute of Film Awards

The Institute of Film Awards is a web application where users can search for movies and nominate them for "The Institute - Film Awards". 

It is deployed using Heroku and can be found live here: https://institute-film-awards.herokuapp.com/

The Institute of Film Awards is a webpage where users can search for movies and nominate them for "The Institute - Film Awards." The films are fetched using OMDB API (https://www.omdbapi.com/). Users can only nominate a maximum of 5 movies, and can add and remove movies from the search list. They can also view their nominations in the **/nominations** page, where they can also remove nominations. If the user navigates to the **/nominations** page and returns to the search results, the search results will still be there, but will reset on hard page refresh. This was to help make user experience better. The nominations, however, are persisted using Redux persist in localStorage so that they are even available on hard page refresh. 

This application was build using Next.js (React framework), with libraries such as Material UI, Redux Persist, and Reselect. 

The images used in this project are from Unsplash (https://unsplash.com/) and are freely-usable. 
