class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string   :year
      t.string   :rated
      t.string   :released
      t.string   :runtime
      t.string   :genre
      t.text     :director
      t.text     :writer
      t.text     :actors
      t.text     :plot
      t.string   :language
      t.string   :country
      t.string   :awards
      t.string   :metascore
      t.string   :imdb_id
      t.string   :imdb_type
      t.integer  :imdb_rating
      t.integer  :imdb_votes
      t.timestamps
    end
  end
end
