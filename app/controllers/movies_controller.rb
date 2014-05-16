class MoviesController < ApplicationController

  def create
    # check if movie already exists in the database
    if Movie.where('imdb_id = ?',params[:imdb_id]).empty?
      # it doesn't exist so create a new movie and save it
      movie = Movie.new(params)
      movie.save

      render :json => movie
    end
  end
  
end