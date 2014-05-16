# == Schema Information
#
# Table name: movies
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  year        :string(255)
#  rated       :string(255)
#  released    :string(255)
#  runtime     :string(255)
#  genre       :string(255)
#  director    :string(255)
#  writer      :string(255)
#  actors      :string(255)
#  plot        :string(255)
#  language    :string(255)
#  country     :string(255)
#  awards      :string(255)
#  poster      :string(255)
#  metascore   :string(255)
#  imdb_id     :string(255)
#  imdb_type   :string(255)
#  imdb_rating :integer
#  imdb_votes  :integer
#

class Movie < ActiveRecord::Base
  attr_accessible :title,
  # omdb fields
  :year, :rated, :released, :runtime, :genre, :director, :writer, :actors, :plot, :language, 
  :country, :awards, :poster, :metascore, :imdb_id, :imdb_type, :imdb_rating, :imdb_votes

  has_one :content, :as => :media
end




