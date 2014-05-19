class MoviesController < ApplicationController

  # perform OMDB search for movie
  def omdb_fetch

    imdb_id = params[:imdb_id]
    
    #perform database query to retrieve movie record
    movie = Movie.where('imdb_id = ?',imdb_id).first

    #check if query result was found?
    if movie.nil? #result was not found, so we need to fetch the data

      #puts a mesage that this movie is new, and API call must be made
      puts "-----------------------------------------------------------------"
      puts "New Movie Detected, fetching data for #{imdb_id} using OMDbAPI..."
      puts "-----------------------------------------------------------------"

      #generate our url to fetch the movie data from OMDbAPI
      url = "http://www.omdbapi.com/?i=#{ imdb_id }" 

      #reformat to JSON format
      response = HTTParty.get(url)
      movie_json = JSON(response)

      content = Content.create(:title => movie_json["Title"], :image => movie_json["Poster"])

      #generate an @movie hash in the same format as retrieved from our database
      movie_data = {
        'year' => movie_json["Year"],
        'rated' => movie_json["Rated"],
        'released' => movie_json["Released"],
        'runtime' => movie_json["Runtime"],
        'genre' => movie_json["Genre"],
        'director' => movie_json["Director"],
        'writer' => movie_json["Writer"],
        'actors' => movie_json["Actors"],
        'plot' => movie_json["Plot"],
        'language' => movie_json["Language"],
        'country' => movie_json["Country"],
        'awards' => movie_json["Awards"],
        'metascore' => movie_json["Metascore"],
        'imdb_id' => movie_json["imdbID"],
        'imdb_type' => movie_json["Type"],
        'imdb_rating' => movie_json["imdbRating"],
        'imdb_votes' => movie_json["imdbVotes"]
      }

      # create a new movie object
      movie = Movie.create(movie_data)

      # set the content's media = the movie
      content.media = movie
      content.save

      # create a response hash including the 'content'
      response = {}
      response[:movie] = movie.attributes
      response[:content] = content.attributes
      # response[:success] = true
      # response[:messsage] = "SUCCESS: Movie #{content.title} has been saved to the database"

      render :json => response
    else
      render :json => {:success => false, :message => 'ERROR: movie already exists in database'}
    end

  end
  
end