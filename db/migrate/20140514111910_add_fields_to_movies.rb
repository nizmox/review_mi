class AddFieldsToMovies < ActiveRecord::Migration
  def change
    # title already exists
    add_column :movies, :year, :string
    add_column :movies, :rated, :string
    add_column :movies, :released, :string
    add_column :movies, :runtime, :string
    add_column :movies, :genre, :string
    add_column :movies, :director, :string
    add_column :movies, :writer, :string
    add_column :movies, :actors, :string
    add_column :movies, :plot, :string
    add_column :movies, :language, :string
    add_column :movies, :country, :string
    add_column :movies, :awards, :string
    add_column :movies, :poster, :string
    add_column :movies, :metascore, :string
    add_column :movies, :imdb_id, :string
    add_column :movies, :imdb_type, :string #changed from type => imdb_type due to reserved word
    # integer fields
    add_column :movies, :imdb_rating, :integer
    add_column :movies, :imdb_votes, :integer
  end
end