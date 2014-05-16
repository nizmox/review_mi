class MoviesController < ApplicationController

  def index
    movies = Movie.all

    render :json => movies
  end

  # requires an imdb_id and renders the corresponding movie
  # def show
  #   movie = Movie.where('imdb_id = ?',params[:imdb_id])

  #   render :json => movie
  # end

  def create
    # params = action, controller, movie IGNORED

    # check if movie already exists in the database
    if Movie.where('imdb_id = ?',params[:imdb_id]).empty?
      # it doesn't exist so create a new movie and save it
      movie = Movie.new(params)
      movie.save

      render :json => movie
      return
    end

    render :json => {:error => 'movie already exists in database'}
  end
  
end