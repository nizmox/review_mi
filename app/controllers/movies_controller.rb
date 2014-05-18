class MoviesController < ApplicationController

  # creates a new movie object and associated 'content'
  def create

    # check if movie already exists in the database
    if Movie.where('imdb_id = ?',params[:imdb_id]).empty?
      # it doesn't exist so create a new movie and save it
      # create a new 'Content' object
      content = Content.create(:title => params[:movie][:title], :image => params[:movie][:poster])
      
      # create a new movie object
      movie = Movie.create(params[:movie])
      
      # set the content's media = the movie
      content.media = movie
      content.save

      # create a response hash including the 'content'
      response = movie.attributes
      response[:content] = content.attributes
      response[:success] = true
      response[:messsage] = "SUCCESS: Movie #{content.title} has been saved to the database"

      render :json => response #movie.to_json
      return
    end

    render :json => {:success => false, :message => 'ERROR: movie already exists in database'}
  end
  
end