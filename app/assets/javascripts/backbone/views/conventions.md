##CONVENTIONS

route name: 'search/movies/:term'
route function name: searchMovies 
  (UNLESS there is already a route called searchMovies, then it can be called searchMoviesTerm)
variable name in route (if any): term
class name: ReviewMi.Views.searchMoviesTermView

folder name: search_movies_term (term being the wildcard)
file name: searchMoviesTermView.js

template name (if any): searchMoviesTermView (No View!)
div inside template (wrapper): class="searchMoviesTerm"

##SUB VIEW (MODEL WITHIN A COLLECTION)

file name: searchMoviesTermSubView.js
class name: ReviewMi.Views.searchMoviesTermSubView
template name: search-movies-term-sub (No View!)

##EXCEPTION

home route!