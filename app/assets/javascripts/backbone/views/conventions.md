##CONVENTIONS

###IN ROUTER
route name: 'search/movies/:term'
route function name: searchMovies 
  (UNLESS there is already a route called searchMovies, then it can be called searchMoviesTerm)
variable name in route (if any): term
class name: ReviewMi.Views.searchMoviesTermView (note: seperated by hypens)

###FOLDER / FILENAME
folder name: search_movies_term (term being the wildcard)
file name: searchMoviesTermView.js

###TEMPLATE
template name (script tag): searchMoviesTermView
div inside template (div wrapper): class="search-movies-term"

- - -

##SUB VIEW (MODEL WITHIN A COLLECTION)

file name: searchMoviesTermSubView.js
class name: ReviewMi.Views.searchMoviesTermSubView
template name: search-movies-term-sub-view

- - -

##HOME VIEW (ROOT PATH)

route name: ''
route function name: home 
class name: ReviewMi.Views.homeView

folder name: home
file name: homeView.js

template name (script tag): homeView
div inside template (div wrapper): class="home-view" (note: seperated by hypens)

##HOME SUB VIEW

file name: homeSubView.js
class name: ReviewMi.Views.homeSubView
template name: home-sub-view